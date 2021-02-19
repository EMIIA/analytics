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

function MouseMotionController(elem) {

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
			selfController.actionLeft(lastRenderedX, lastRenderedY, mouseX, mouseY);
		// Если нажата правая кнопка или обе кнопки:
		if (isMouseRightDown)		
			selfController.actionRight(lastRenderedX, lastRenderedY, mouseX, mouseY);
			
		lastRenderedX = mouseX;
		lastRenderedY = mouseY;
		
		// Если определена requestAnimationFrame, планируем следующий вызов:
		if (window.requestPureAnimFrame && (isMouseLeftDown || isMouseRightDown)) requestPureAnimFrame(executeAction, elemField);
	}
	
	// Действие при нажатии кнопки мыши:
	function mouseDown(event) {	
		// Если нажата левая кнопка:	
		if ((event.which && event.which == 1) || (event.button && !!(event.button & 1))) {
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
		selfController.actionUp.call(elemField, event);
			
		// Вызываем управление однократно, если не определена requestAnimationFrame:
		if (!window.requestPureAnimFrame) executeAction();

		// Если отпущена левая кнопка:	
		if ((event.which && event.which == 1) || (event.button && !!(event.button & 1))) {
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
		if (doMouseClick) selfController.actionClick.call(elemField, event);
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
}