// Получение из подключенных CSS-файлов значения свойства property для селектора selector.
// Свойство property должно быть case-sensitive в синтаксисе javascript.
// Например: metroGetCssValue('.column', 'marginRight').
// Чтобы это работало в Chrome на локальном диске, Chrome должен быть запущен с флагом -allow-file-access-from-files.
function getCssValue(selector, property) {
	var value = '';
	selector = selector.toLowerCase();
	// Перебор всех CSS файлов:
	for (var k = 0; k < document.styleSheets.length; k++) {
		var styleSheet = document.styleSheets[k];
		try {
			var cssRules = styleSheet.cssRules || styleSheet.rules;
			// Перебор всех правил в файле:
			for (var i = 0; i < cssRules.length; i++) {
				var cssRule = cssRules[i];
				var selectorText = cssRule.selectorText;
				// Разбиваем строку селекторов по запятым на отдельные селекторы:
				var selectors = selectorText.split(',');
				// Ищем совпадающий селектор:
				for (var j = 0; j < selectors.length; j++)
					if (selectors[j].trim().toLowerCase() == selector) {
						// Если значение свойства не пусто, оно запоминается:
						if (cssRule.style[property] != '') value = cssRule.style[property];
					}
			}
		}
		catch(e) {
		}
	}
	// Возвращается последнее найденное значение:
	return value;
}
