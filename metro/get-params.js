// Получение ассоциативного массива GET-параметров

function readGetParams() {
	// Строка параметров без начального знака "?" 
	// разбивается по разделителям "&" на "равенства":
	var Equations = window.location.search.substring(1).split('&');
	var Params = {};
	if (Equations[0] == '') return Params;
	for (var i=0; i<Equations.length; i++) {
		// каждое равенство разбивается на пару "параметр", "значение"
		var Pair = Equations[i].split('=');
		// и заносится в объект
		Params[Pair[0]] = (Pair[1]) ? Pair[1] : '';
		// причем значения 'undefined' заменяются на ''
	}
	return Params;
}

// Запись в GET-параметры (добавление параметров с сохранением существующих)
// без перезагрузки страницы. Аргументы: 
// Params - ассоциативный объект параметров, например, Params = {x: 1, s: 'abc'};
// options - необязательный объект аргументов:
// 		options.hardcode - если true, то записывать с обновлением страницы, если иначе нельзя,
// 		options.noHash - если true, то удалять хэш-код (#foo).

function writeGetParams(newParams, options) {
	// Обработка аргументов:
	options = options || {};
	var hardcode = !!options.hardcode;
	var noHash = !!options.noHash;
	// Считывание существующих параметров:
	var Params = readGetParams();
	// Добавление новых параметром и/или обновление старых:
	for (var param in newParams) {
		Params[param] = newParams[param];
		// Если передается пустое значение параметра, то параметр удаляется:
		if (newParams[param] == '') delete Params[param];
	}
	// Генерация массива "равенств":
	var Equations = new Array();
	for (var param in Params)
		Equations.push(param + '=' + Params[param]);
	// Запись:
	var URL = window.location.protocol + '//'
			+ window.location.host 
			+ window.location.pathname 
			+ '?' + Equations.join('&')
			+ ((noHash) ? '' : window.location.hash);
	if (history.replaceState) history.replaceState(null, '', URL);
	else if (hardcode) location.href = URL;
	return URL;
}