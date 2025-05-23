// Получение поддерживаемого варианта функции requestAnimationFrame.
// Если ничего нет - возвращаем обычный таймер.

window.requestAnimFrame = (function(){
	return	window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

/**
 * Анимация с requestAnimationFrame и автоматическим интервалом между кадрами. Параметры:
 * opts.delta(time) -- временная функция, time=0..1. По умолчанию linear.
 * opts.step(progress) -- функция рисования, progress=0..1.
 * opts.complete -- функция, которая выполнится по окончании анимации
*/
function animate(opts) {
	var start = new Date;
	var delta = opts.delta || linear;

	function animloop() {
		var progress = (new Date - start) / opts.duration;
		if (progress > 1) progress = 1;
		opts.step( delta(progress) );
		if (progress == 1) {
			opts.complete && opts.complete();
		}
		else requestAnimFrame(animloop);
	}

	animloop();
}

/**
 * Анимация с обычным setTimeout и настраиваемым интервалом между кадрами. Параметры:
 * opts.delta(time) -- временная функция, time=0..1. По умолчанию linear.
 * opts.step(progress) -- функция рисования, progress=0..1.
 * opts.complete -- функция, которая выполнится по окончании анимации
 * opts.delay -- задержка между кадрами, по умолчанию 17
*/
function animateTimeout(opts) {
	var start = new Date;
	var delta = opts.delta || linear;

	function animloop() {
		var progress = (new Date - start) / opts.duration;
		if (progress > 1) progress = 1;
		opts.step( delta(progress) );
		if (progress == 1) {
			opts.complete && opts.complete();
		}
		else setTimeout(animloop, opts.delay || 17);
	}

	animloop();
}

/**
 * Анимация CSS-свойства opts.prop у элемента opts.elem
 * от opts.start до opts.end продолжительностью opts.duration
 *
 * Остальные свойства передаются в animate
 * Например: animateProp({
 *   elem: ...,
 *   prop: 'height',
 *   start: 0, // все размеры в пикселях
 *   end: 100,
 *   duration: 1000
 * })
*/
function animateProp(opts) {
  var start = opts.start, end = opts.end, prop = opts.prop;

  opts.step = function(delta) {
    var value = Math.round(start + (end - start)*delta);
    opts.elem.style[prop] = value + 'px';
  }
  return animate(opts);
}

// ------------------ Временные функции ------------------

function elastic(progress) {
  return Math.pow(2, 10 * (progress-1)) * Math.cos(20*Math.PI*1.5/3*progress);
}

function linear(progress) {
  return progress;
}

function quad(progress) {
  return Math.pow(progress, 2);
}

function quint(progress) {
  return Math.pow(progress, 5);
}

function circ(progress) {
  return 1 - Math.sin(Math.acos(progress));
}

function back(progress) {
  return Math.pow(progress, 2) * ((1.5 + 1) * progress - 1.5);
}


function bounce(progress) {
  for(var a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (progress >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function makeEaseInOut(delta) {
  return function(progress) {
    if (progress < .5)
      return delta(2*progress) / 2;
    else
      return (2 - delta(2*(1-progress))) / 2;
  }
}

function makeEaseOut(delta) {
  return function(progress) {
    return 1 - delta(1 - progress);
  }
}