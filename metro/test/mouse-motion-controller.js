// Получение поддерживаемого варианта функции requestAnimationFrame.
// Если ничего нет - возвращаем undefined.

window.requestPureAnimFrame = (function(){
	return	window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame;
})();


// Абстрактный класс для управления с помощью движения мыши с зажатой кнопкой.

function MouseMotionController(elem) 
{
	var selfController = this;
	
	var isMouseLeftDown = false;		// Зажата ли левая кнопка мыши
	var isMouseRightDown = false;		// Зажата ли другая кнопка мыши
	var doMouseClick = true;			// Запускать ли событие клика при отпускании мыши
	var mouseX, mouseY;					// Последние полученные координаты мыши
	var lastRenderedX, lastRenderedY;	// Старые координаты мыши
	var elemField = elem;				// DOM-элемент, над которым отслеживаются события мыши
	
	// Определяются извне и присваиваются в эти свойства в виде
	// action(x1,y1, x2,y2),  где x1,y1 - старые координаты мыши, x2,y2 - новые координаты:
	
	this.actionLeft;					// Функция действия при движении мыши с зажатой левой кнопкой мыши
	this.actionRight;					// Функция действия при движении мыши с зажатой другой кнопкой мыши
										// (При зажатых обеих кнопках выполняется второе действие)
	this.actionClick;					// Функция действия при клике
	this.actionUp;						// Функция действия при отпускании кнопки мыши
	
	// Функция управления:
	function executeAction() {
		// Если нажата левая кнопка без правой:
		if (isMouseLeftDown && !isMouseRightDown)
			if (selfController.actionLeft) selfController.actionLeft(lastRenderedX, lastRenderedY, mouseX, mouseY);
		// Если нажата правая кнопка или обе кнопки:
		if (isMouseRightDown)		
			if (selfController.actionRight) selfController.actionRight(lastRenderedX, lastRenderedY, mouseX, mouseY);
			
		lastRenderedX = mouseX;
		lastRenderedY = mouseY;
		
		// Если определена requestAnimationFrame, планируем следующий вызов:
		if (window.requestPureAnimFrame && (isMouseLeftDown || isMouseRightDown)) requestPureAnimFrame(executeAction, elemField);
	}
	
	// Действие при нажатии кнопки мыши:
	function mouseDown(event) {	
		// Если нажата левая кнопка:	
		if (!((event.which && event.which != 1) || (event.button && event.button != 0) || (event.buttons && event.buttons != 1))) {
//		if ((event.which && event.which == 1) || (event.button && !!(event.button & 1))) {
			isMouseLeftDown = true;
			elemField.style.cursor = 'pointer';
		}
		// Если нажата другая кнопка:
		else {
			isMouseRightDown = true;
			elemField.style.cursor = 'ns-resize';
		}
		// Если нажаты обе кнопки:
		if (isMouseLeftDown && isMouseRightDown) elemField.style.cursor = 'ns-resize';
		
		lastRenderedX = event.clientX;
		lastRenderedY = event.clientY;
		mouseX = event.clientX;
		mouseY = event.clientY;
		
		// Начало управления при наличии requestAnimationFrame:
		if (window.requestPureAnimFrame) requestPureAnimFrame(executeAction, elemField);
		
		return false;	// запрет выделения
	}
	
	// Действия при движении мыши:
	function mouseMove(event) {	
		if (!event) event = window.event;
		mouseX = event.clientX;
		mouseY = event.clientY;
		
		// Если при движении зажата кнопка мыши, 
		// после ее отпускания не будем запускать событие клика:
		if (isMouseLeftDown || isMouseRightDown) doMouseClick = false;
		else doMouseClick = true;
		
		// Запускаем управление при каждом движении мыши, если не определена requestAnimationFrame:
		if (!window.requestPureAnimFrame) executeAction();
	}
	
	// Действия при отпускании кнопки мыши:
	function mouseUp(event) {	
		if (!event) event = window.event;
		mouseX = event.clientX;
		mouseY = event.clientY;
		
		// Вызываем действие при отпускании кнопки мыши:
		if (selfController.actionUp) selfController.actionUp.call(elemField, event);
			
		// Вызываем управление однократно, если не определена requestAnimationFrame:
		if (!window.requestPureAnimFrame) executeAction();

		// Если отпущена левая кнопка:	
		if (!((event.which && event.which != 1) || (event.button && event.button != 0) || (event.buttons && event.buttons != 1))) {
//		if ((event.which && event.which == 1) || (event.button && !!(event.button & 1))) {
			isMouseLeftDown = false;
			elemField.style.cursor = 'ns-resize';
		}
		// Если отпущена другая кнопка:
		else {
			isMouseRightDown = false;
			elemField.style.cursor = 'pointer';
		}
		// Если отпущены обе кнопки:
		if (!isMouseLeftDown && !isMouseRightDown) elemField.style.cursor = 'default';		
	}
	
	// Действие при клике:
	function mouseClick(event) {
		if (!event) event = window.event;
		if (doMouseClick) 
			if (selfController.actionClick) selfController.actionClick.call(elemField, event);
		doMouseClick = true;
	}
	
	// Обработчики событий мыши на DOM-элементе:
	elemField.onmousedown = mouseDown;
	elemField.onmousemove = mouseMove;
	elemField.onmouseup = mouseUp;
	// elemField.onmouseout = mouseUp;
	elemField.onclick = mouseClick;  
	
	// Запрет контекстного меню:
	elemField.oncontextmenu = function() { 
		return false; 
	};	
	
	// Преобразование Touch-событий в Mouse-события:
	initTouchHandlers(elemField);
}


// Преобразование Touch-событий в Mouse-события:

function touchHandler(event)
{
    var touch = event.changedTouches[0],
        type = "",
		T = event.touches;
		
    switch(event.type)
    {
        case "touchstart":  type = "mousedown"; break;
        case "touchmove":   type = "mousemove"; break;        
        case "touchend":    type = "mouseup";   break;
        case "touchcancel": type = "mouseup";   break;
        default:            return;
    }
	
	var tButton = 0;		// эмулируем левую кнопку мыши по умолчанию
	var tButtons = 1;	
	var sX = touch.screenX;
	var sY = touch.screenY;
	var cX = touch.clientX;
	var cY = touch.clientY;
	
	// Eсли есть второе прикосновение, то эмулируем нажатие правой кнопки и движение только по вертикали:
	if (T.length > 1) {
		tButton = 2;
		tButtons = 2;
		sX = 0;
		cX = 0;
		sY = -Math.sqrt((T[1].screenX - T[0].screenX)*(T[1].screenX - T[0].screenX) + (T[1].screenY - T[0].screenY)*(T[1].screenY - T[0].screenY));
		cY = -Math.sqrt((T[1].clientX - T[0].clientX)*(T[1].clientX - T[0].clientX) + (T[1].clientY - T[0].clientY)*(T[1].clientY - T[0].clientY));
	}
	
	// Если второе прикосновение закончено, эмулируем отжатие правой кнопки:
	if (T.length == 1 && type == "mouseup") {
		tButton = 2;
		tButtons = 2;
		tShift = true;
		touch = T[0];
	}

    var simulatedEvent = new MouseEvent(type, 
	{
		bubbles: true, 
		cancelable: true, 
		view: window, 
		screenX: sX, 
		screenY: sY, 
		clientX: cX, 
		clientY: cY, 
		ctrlKey: false,  
		altKey: false, 
		shiftKey: false, 
		metaKey: false, 
		button: tButton, 
		buttons: tButtons, 
		relatedTarget: null
	});

    touch.target.dispatchEvent(simulatedEvent);
    if (type == "mousemove") event.preventDefault(); // запрет скролла
}

function initTouchHandlers(elem) {
    elem.addEventListener("touchstart", touchHandler, true);
    elem.addEventListener("touchmove", touchHandler, true);
    elem.addEventListener("touchend", touchHandler, true);
    elem.addEventListener("touchcancel", touchHandler, true);    
} 