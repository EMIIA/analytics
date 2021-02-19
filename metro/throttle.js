/*
Обёртка, передающая вызов f не чаще, чем раз в ms миллисекунд. 
Если игнорируемый вызов оказался последним, т.е. после него 
до окончания задержки ничего нет — то он выполнится.

Использование:

var f1000 = throttle(f, 1000);
f1000(1); // сработает тут же
f1000(2); // (тормозим, пока не прошло 1000мс)
*/

function throttle(f, ms, result) {

  // одно из трёх состояний
  var state = null;        // исходное, "нулевое состояние"
  var COOLDOWN = 1;        // был вызов, ожидаю пока пройдёт таймаут
  var CALL_SCHEDULED = 2;  // во время COOLDOWN был ещё вызов, он запланирован на выполнение по окончании таймаута


  // чтобы запланировать вызов, мы сохраняем его this и arguments
  var scheduledThis, scheduledArgs;

  function callF() {
    f.apply(scheduledThis, scheduledArgs);
  }

  // переход между состояниями
  // изначально нулевое
  // при этом тут же вызывается функция и переходим в COOLDOWN
  // если во время COOLDOWN вызов, то переходим в CALL_SCHEDULED с сохранением аргументов
  // если во время CALL_SCHEDULED вызов, то обновим сохранённые аргументы
  return function() {
    switch(state) {
      case null:
        f.apply(this, arguments);
        state = COOLDOWN;
        setTimeout(later, ms);
        break;

      case COOLDOWN:
      case CALL_SCHEDULED:        
        scheduledThis = this;
        scheduledArgs = arguments;

        state = CALL_SCHEDULED;
        break;
    }
	return result;
  }

  function later() {

    if (state == COOLDOWN) {
      state = null;
      return;
    }

    if (state == CALL_SCHEDULED) {
      callF();
      // вызов только что был, переход в COOLDOWN, 
      // чтобы обеспечить паузу до следующего 
      state = COOLDOWN; 
      setTimeout(later, ms);
    }
  }
}
