var data = {
	CoordinatesList: new Array(),
	NamesList: new Array(),
	ClassesList: new Array(),
	Interchanges: new Array()
};

// Формат данных о станциях: 

// Координаты: 
// [широта, долгота, глубина_заложения, высота_поверхности_земли_над_уровнем_моря]

// Массив названий станции в разные года, упорядоченных по возрастанию года:
// [[название, год_открытия], [...], ...]
// если станция закрывалась:
// [[название, год_открытия, год_закрытия], [название (новое или старое), год_открытия], [...], ...]


// Кольцевая линия:

data.CoordinatesList[0] = [
	[55.761076, 37.577431, -36, 137],
	[55.776232, 37.584363, -43, 156],
	[55.779859, 37.603204, -40, 158],
	[55.779896, 37.631541, -40, 162],
	[55.774895, 37.654315, -37, 149],
	[55.757125, 37.659463, -40, 144],
	[55.741712, 37.651675, -53, 145],
	[55.731878, 37.637895, -40, 125],
	[55.729089, 37.624356, -36, 132],
	[55.729705, 37.608886, -40, 130],
	[55.735642, 37.591613, -40, 132],
	[55.744345, 37.564568, -48, 126],
	[55.761076, 37.577431, -36, 137]
];
data.NamesList[0] = [
	[['Краснопресненская', 1954]],
	[['Белорусская, КЛ', 1952]],
	[['Новослободская', 1952]],
	[['Ботанический сад, КЛ', 1952], ['Проспект Мира, КЛ', 1966]],
	[['Комсомольская, КЛ', 1952]],
	[['Курская, КЛ', 1950]],
	[['Таганская, КЛ', 1950]],
	[['Павелецкая, КЛ', 1950]],
	[['Серпуховская', 1950], ['Добрынинская', 1961]],
	[['Калужская', 1950], ['Октябрьская, КЛ', 1961]],
	[['Парк Культуры им. Горького, КЛ', 1950], ['Парк Культуры, КЛ', 1980, 2011], ['Парк Культуры, КЛ', 2012]],
	[['Киевская, КЛ', 1954]],
	[['', 1954]]
];
data.ClassesList[0] = "L0";

// Сокольническая линия:

data.CoordinatesList[1] = [
	[55.560455, 37.468170, -25, 177],
	[55.568642, 37.459367, -25, 181],
	[55.586304, 37.433752, 0, 192],
	[55.601514, 37.407482, 0, 188],
	[55.622158, 37.424498, -24, 191],
	[55.632950, 37.441731, -12, 191],
	[55.645995, 37.472841, -12, 201],
	[55.663776, 37.483256, -8, 182],
	[55.676449, 37.50489, -8, 193],
	[55.692591, 37.533209, -27, 193],
	[55.710272, 37.559204, 10, 118],
	[55.723333, 37.564068, -42, 134],
	[55.726725, 37.578694, -42, 133],
	[55.735456, 37.594281, -11, 130],
	[55.745317, 37.603935, -13, 133],
	[55.751423, 37.610111, -12, 137],
	[55.757561, 37.616207, -15, 149],
	[55.759693, 37.627139, -33, 158],
	[55.765863, 37.639255, -35, 163],
	[55.768806, 37.648444, -31, 161],
	[55.775444, 37.656687, -8, 150],
	[55.780058, 37.667332, -8, 155],
	[55.788762, 37.680001, -9, 147],
	[55.796402, 37.715514, -8, 143],
	[55.804101, 37.744999, -9, 142],
	[55.814722, 37.734353, -8, 143]
];
data.NamesList[1] = [
	[['Коммунарка', 2019]],
	[['Ольховая', 2019]],
	[['Прокшино', 2019]],
	[['Филатов Луг', 2019]],
	[['Саларьево', 2016]],
	[['Румянцево', 2016]],
	[['Тропарево', 2014]],
	[['Юго-Западная', 1963]],
	[['Проспект Вернадского', 1963]],
	[['Университет', 1959]],
	[['Ленинские горы', 1959, 1983], ['Воробьевы горы', 2002]],
	[['Спортивная', 1957]],
	[['Фрунзенская', 1957, 2016], ['Фрунзенская', 2017]],
	[['Парк Культуры им. Горького, СЛ', 1935], ['Парк Культуры, СЛ', 1980]],
	[['Дворец Советов', 1935], ['Кропоткинская', 1957]],
	[['Библиотека имени Ленина', 1935]],
	[['Охотный ряд', 1935], ['Имени Кагановича', 1955], ['Охотный ряд', 1957], ['Проспект Маркса', 1961], ['Охотный ряд', 1990]],
	[['Дзержинская', 1935], ['Лубянка', 1990]],
	[['Кировская', 1935, 1941], ['Кировская', 1945], ['Чистые пруды', 1990]],
	[['Красные ворота', 1935], ['Лермонтовская', 1962], ['Красные ворота', 1986]],
	[['Комсомольская, СЛ', 1935]],
	[['Красносельская', 1935]],
	[['Сокольники', 1935]],
	[['Преображенская площадь', 1965]],
	[['Черкизовская', 1990]],
	[['Улица Подбельского', 1990], ['Бульвар Рокоссовского, СЛ', 2014]]
];
data.ClassesList[1] = "L1";

// Замоскворецкая линия:

data.CoordinatesList[2] = [
	[55.878276, 37.480766, -14, 178],
	[55.864970, 37.475016, -25, 171],
	[55.85514, 37.476081, -6, 164],
	[55.839877, 37.486811, -6, 168],
	[55.81894, 37.497901, -7, 165],
	[55.805, 37.515411, -10, 160],
	[55.800305, 37.532878, -10, 166],
	[55.789733, 37.558215, -40, 163],
	[55.776726, 37.583391, -33, 155],
	[55.76993, 37.596054, -33, 164],
	[55.764859, 37.606389, -42, 169],
	[55.757422, 37.618925, -34, 143],
	[55.741386, 37.629343, -38, 127],
	[55.730572, 37.637434, -34, 125],
	[55.707513, 37.657699, -11, 137],
	[55.693962, 37.664395, 0, 123],
	[55.678486, 37.663932, -9, 134],
	[55.655092, 37.648793, -7, 170],
	[55.635729, 37.656605, -8, 163],
	[55.621509, 37.669321, -8, 143],
	[55.613235, 37.694852, -9, 171],
	[55.610879, 37.718788, -10, 172],
	[55.613805, 37.74442, -9, 163],
	[55.632696, 37.766083, -10, 119]
];
data.NamesList[2] = [
	[['Ховрино', 2017]],
	[['Беломорская', 2018]],
	[['Речной вокзал', 1964]],
	[['Водный стадион', 1964]],
	[['Войковская', 1964]],
	[['Сокол', 1938]],
	[['Аэропорт', 1938]],
	[['Динамо', 1938]],
	[['Белорусская, ЗЛ', 1938]],
	[['Маяковская', 1938]],
	[['Горьковская', 1979], ['Тверская', 1990]],
	[['Площадь Свердлова', 1938], ['Театральная', 1990]],
	[['Новокузнецкая', 1943]],
	[['Павелецкая, ЗЛ', 1943]],
	[['Завод им. Сталина', 1943], ['Автозаводская, ЗЛ', 1956]],
	[['Технопарк', 2015]],
	[['Коломенская', 1969]],
	[['Каширская, ЗЛ', 1969]],
	[['Кантемировская', 1984]],
	[['Ленино', 1984], ['Царицыно', 1990]],
	[['Орехово', 1984]],
	[['Домодедовская', 1985]],
	[['Красногвардейская', 1985]],
	[['Алма-Атинская', 2012]]
];
data.ClassesList[2] = "L2";

// Арбатско-покровская линия:

data.CoordinatesList[3] = [
	[55.855969, 37.35407, -11, 175],
	[55.845698, 37.362117, -14, 174],
	[55.835347, 37.382352, -14, 162],
	[55.825323, 37.385216, 0, 127],
	[55.803737, 37.403161, -8, 154],
	[55.756707, 37.408142, -10, 194],
	[55.740757, 37.416918, -7, 168],
	[55.730707, 37.445996, 0, 153],
	[55.729605, 37.470361, -9, 164],
	[55.736453, 37.516511, -74, 156],
	[55.74426,  37.564655, -38, 126],
	[55.747297, 37.582022, -50, 149],
	[55.752139, 37.607145, -41, 145],
	[55.756583, 37.621988, -34, 150],
	[55.758084, 37.658242, -31, 149],
	[55.773042, 37.680624, -33, 143],
	[55.781655, 37.703878, -32, 130],
	[55.783279, 37.721028, -40, 140],
	[55.788534, 37.750991, -9, 145],
	[55.787782, 37.781557, 0, 152],
	[55.794726, 37.79936, -7, 160],
	[55.809309, 37.798573, -8, 168]
];
data.NamesList[3] = [
	[['Пятницкое шоссе', 2012]],
	[['Митино', 2009]],
	[['Волоколамская', 2009]],
	[['Мякинино', 2009]],
	[['Строгино', 2008]],
	[['Крылатское', 1989]],
	[['Молодежная', 1965]],
	[['Кунцевская, АПЛ', 2008]],
	[['Славянский бульвар', 2008]],
	[['Парк Победы, АПЛ', 2003]],
	[['Киевская, АПЛ', 1953]],
	[['Смоленская, АПЛ', 1953]],
	[['Арбатская, АПЛ', 1953]],
	[['Площадь революции', 1938]],
	[['Курская, АПЛ', 1938]],
	[['Бауманская', 1944, 2015], ['Бауманская', 2016]],
	[['Электрозаводская', 1944, 2007], ['Электрозаводская', 2008]],
	[['Сталинская', 1944], ['Семеновская', 1961, 2005], ['Семеновская', 2006]],
	[['Измайловский парк культуры и отдыха им. Сталина', 1944], ['Измайловская', 1948], ['Измайловский парк', 1963], ['Партизанская', 2005]],
	[['Первомайская', 1954], ['Измайловский парк', 1961], ['Измайловская', 1963]],
	[['Первомайская', 1961]],
	[['Щелковская', 1963]]
];
data.ClassesList[3] = "L3";

// Филевская линия:

data.CoordinatesList[4] = [
	[55.730707, 37.445996, 0, 153],
	[55.73602, 37.467106, 0, 149],
	[55.739544, 37.483338, 0, 143],
	[55.743762, 37.497756, 0, 135],
	[55.746066, 37.514866, 0, 131],
	[55.73998, 37.534374, 0, 143],
	[55.738823, 37.548401, 0, 133],
	[55.743529, 37.565299, -9, 126],
	[55.749965, 37.541218, -22.5, 130],
	[55.748231, 37.534467, -25, 130],
	[55.749965, 37.541218, -22.5, 130],
	[55.743529, 37.565299, -9, 126],
	[55.748741, 37.582342, -8, 141],
	[55.751861, 37.601206, -8, 143],
	[55.75252, 37.609049, -7, 145]
];
data.NamesList[4] = [
	[['Кунцевская, ФЛ', 1965]],
	[['Пионерская', 1961]],
	[['Филевский парк', 1961]],
	[['Багратионовская', 1961]],
	[['Фили', 1959]],
	[['Кутузовская, ФЛ', 1958]],
	[['Студенческая', 1958]],
	[['Киевская', 1937, 1953], ['Киевская, ФЛ', 1958]],
	[['Деловой центр', 2005], ['Выставочная', 2008]],
	[['Международная', 2006]],
	[['', 2005]],
	[['', 1937]],
	[['Смоленская', 1935, 1953], ['Смоленская, ФЛ', 1958]],
	[['Арбатская', 1935, 1953], ['Арбатская, ФЛ', 1958]],
	[['Ул. Коминтерна', 1935], ['Калининская', 1946, 1953], ['Калининская', 1958], ['Александровский сад', 1990]]
];
data.ClassesList[4] = "L4";

// Калужско-Рижская линия:

data.CoordinatesList[5] = [
	[55.887231, 37.661511, -10, 152],
	[55.869576, 37.664259, -10, 142],
	[55.855231, 37.652794, -8, 146],
	[55.845266, 37.638561, -7, 142],
	[55.821138, 37.641157, -54, 144],
	[55.809793, 37.63913, -51, 160],
	[55.793828, 37.636403, -46, 161],
	[55.781024, 37.631709, -50, 158],
	[55.773284, 37.632114, -43, 159],
	[55.766818, 37.637559, -49, 161],
	[55.755568, 37.633641, -29, 145],
	[55.741301, 37.62746, -46, 128],
	[55.730527, 37.610978, -50, 133],
	[55.72037, 37.607897, -40, 139],
	[55.707577, 37.586157, -16, 145],
	[55.687831, 37.573511, -9, 177],
	[55.677953, 37.562904, -7, 178],
	[55.670291, 37.554681, -7, 200],
	[55.657155, 37.540579, -10, 199],
	[55.642742, 37.525682, -12, 235],
	[55.633293, 37.519085, -8, 246],
	[55.619009, 37.508308, -8, 254],
	[55.606304, 37.533502, -8, 216],
	[55.600986, 37.554099, -7, 220]
];
data.NamesList[5] = [
	[['Медведково', 1978]],
	[['Бабушкинская', 1978]],
	[['Свиблово', 1978]],
	[['Ботанический сад, КРЛ', 1978]],
	[['ВСХВ', 1958], ['ВДНХ', 1959]],
	[['Мир', 1958], ['Щербаковская', 1966], ['Алексеевская', 1990]],
	[['Рижская', 1958]],
	[['Ботанический сад, КРЛ', 1958], ['Проспект Мира, КРЛ', 1966]],
	[['Колхозная', 1972], ['Сухаревская', 1990]],
	[['Тургеневская', 1972]],
	[['Площадь Ногина, КРЛ', 1971], ['Китай-город, КРЛ', 1990]],
	[['Новокузнецкая', 1971], ['Третьяковская, КРЛ', 1983]],
	[['Октябрьская, КРЛ', 1962]],
	[['Шаболовская', 1980]],
	[['Ленинский проспект', 1962]],
	[['Академическая', 1962]],
	[['Профсоюзная', 1962]],
	[['Новые Черемушки', 1962]],
	[['Калужская', 1964], ['Калужская', 1974]],
	[['Беляево', 1974]],
	[['Коньково', 1987]],
	[['Теплый стан', 1987]],
	[['Ясенево', 1990]],
	[['Битцевский парк', 1990], ['Новоясеневская', 2008]]
];
data.ClassesList[5] = "L5";

// Таганско-Краснопресненская линия:

data.CoordinatesList[6] = [
	[55.860647, 37.436497, -6, 172],
	[55.850479, 37.439815, -6, 171],
	[55.82667, 37.436966, -11, 139],
	[55.818374, 37.435774, -10, 124],
	[55.808552, 37.464358, -13, 160],
	[55.793501, 37.493454, -9, 157],
	[55.777538, 37.519456, -10, 149],
	[55.773681, 37.54664, -9, 149],
	[55.764849, 37.561371, -11, 153],
	[55.76115, 37.579089, -30, 139],
	[55.765119, 37.607431, -51, 169],
	[55.760555, 37.625998, -40, 160],
	[55.755312, 37.632837, -29, 147],
	[55.74027, 37.652175, -36, 140],
	[55.73192, 37.665783, -9, 132],
	[55.725193, 37.686967, -8, 145],
	[55.708787, 37.731604, -13, 133],
	[55.705576, 37.765663, -8, 140],
	[55.716965, 37.793283, -6, 152],
	[55.715671, 37.817981, 0, 144],
	[55.701483, 37.852257, -12, 140],
	[55.685524, 37.856343, -15, 142],
	[55.674300, 37.858200, -15, 132]
];
data.NamesList[6] = [
	[['Планерная', 1975]],
	[['Сходненская', 1975]],
	[['Тушинская', 1975]],
	[['Спартак', 2014]],
	[['Щукинская', 1975]],
	[['Октябрьское поле', 1972]],
	[['Полежаевская', 1972]],
	[['Беговая', 1972]],
	[['Улица 1905 года', 1972]],
	[['Баррикадная', 1972]],
	[['Пушкинская', 1975]],
	[['Кузнецкий мост', 1975]],
	[['Площадь Ногина, ТКЛ', 1971], ['Китай-город, ТКЛ', 1990]],
	[['Таганская, ТКЛ', 1966]],
	[['Пролетарская', 1966]],
	[['Волгоградский проспект', 1966]],
	[['Текстильщики', 1966]],
	[['Кузьминки', 1966]],
	[['Рязанский проспект', 1966]],
	[['Ждановская', 1966], ['Выхино', 1989]],
	[['Лермонтовский проспект', 2013]],
	[['Жулебино', 2013]],
	[['Котельники', 2015]]
];
data.ClassesList[6] = "L6";

// Калининская линия:

data.CoordinatesList[7] = [
	[55.740941, 37.627604, -46, 128],
	[55.741289, 37.654114, -60, 144],
	[55.746976, 37.682527, -46, 139],
	[55.752505, 37.719566, -53, 149],
	[55.75782, 37.749346, -53, 149],
	[55.751252, 37.786515, -9, 155],
	[55.751712, 37.816733, -9, 157],
	[55.745108, 37.863957, -9, 156]
];
data.NamesList[7] = [
	[['Третьяковская, КЛЛ', 1986]],
	[['Марксистская', 1979]],
	[['Площадь Ильича', 1979]],
	[['Авиамоторная', 1979]],
	[['Шоссе Энтузиастов, КЛЛ', 1979]],
	[['Перово', 1979]],
	[['Новогиреево', 1979]],
	[['Новокосино', 2012]]
];
data.ClassesList[7] = "L7";

// Калининско-Солнцевская линия:

data.CoordinatesList[8] = [
	[55.633983, 37.334934, -12, 184],
	[55.639671, 37.355277, -16, 180],
	[55.647719, 37.370364, -20, 170],
	[55.649641, 37.391190, -13, 171],
	[55.659575, 37.417191, -14, 175],
	[55.670472, 37.448612, -25, 178],
	[55.689538, 37.483049, -13, 148],
	[55.697594, 37.498514, -15, 176],
	[55.707148, 37.516238, -15, 185],
	[55.724879, 37.496674, -15, 147],
	[55.736546, 37.516636, -74, 156],
	[55.749100, 37.539500, -30, 130],
	[55.736546, 37.516636, -74, 156],
	[55.757227, 37.523965, -18, 139],
	[55.776713, 37.519375, -21, 148],
	[55.786584, 37.533210, -28, 149],
	[55.791938, 37.557290, -25, 167],
	[55.792329, 37.586392, -65, 165]
];
data.NamesList[8] = [
	[['Рассказовка', 2018]],
	[['Новопеределкино', 2018]],
	[['Боровское шоссе', 2018]],
	[['Солнцево', 2018]],
	[['Говорово', 2018]],
	[['Озёрная', 2018]],
	[['Мичуринский проспект', 2018]],
	[['Раменки', 2017]],
	[['Ломоносовский проспект', 2017]],
	[['Минская', 2017]],
	[['Парк Победы, КСЛ', 2014]],
	[['Деловой центр, КСЛ', 2014, 2018]],
	[['', 2018]],
	[['Шелепиха, КСЛ', 2018]],
	[['Хорошёвская, КСЛ', 2018]],
	[['ЦСКА, КСЛ', 2018]],
	[['Петровский парк, КСЛ', 2018]],
	[['Савеловская, КСЛ', 2018]]
];
data.ClassesList[8] = "L7";

// Серпуховско-Тимирязевская линия:

data.CoordinatesList[9] = [
	[55.897962, 37.587184, -9, 169],
	[55.883762, 37.60327, -10, 154],
	[55.863311, 37.604754, -9, 144],
	[55.847322, 37.590071, -11, 157],
	[55.834912, 37.575012, -61, 166],
	[55.817875, 37.576339, -64, 164],
	[55.807228, 37.581511, -59, 169],
	[55.793367, 37.587604, -52, 163],
	[55.78086, 37.601951, -49, 161],
	[55.770972, 37.618574, -50, 149],
	[55.76458, 37.608505, -62, 166],
	[55.751057, 37.607039, -47, 143],
	[55.737899, 37.618321, -37, 130],
	[55.728028, 37.624651, -43, 133],
	[55.70881, 37.622992, -10, 130],
	[55.683048, 37.622723, -14, 148],
	[55.672444, 37.610488, -9, 165],
	[55.662669, 37.605535, -10, 175],
	[55.652524, 37.598379, -13, 194],
	[55.640584, 37.606426, -11, 158],
	[55.622308, 37.609005, -10, 170],
	[55.612466, 37.604532, -10, 182],
	[55.595178, 37.600443, -8, 175],
	[55.582771, 37.596581, -8, 181],
	[55.569657, 37.577156, -10, 169]
];
data.NamesList[9] = [
	[['Алтуфьево', 1994]],
	[['Бибирево', 1992]],
	[['Отрадное', 1991]],
	[['Владыкино, СТЛ', 1991]],
	[['Петровско-Разумовская, СТЛ', 1991]],
	[['Тимирязевская', 1991]],
	[['Дмитровская', 1991]],
	[['Савеловская, СТЛ', 1988]],
	[['Менделеевская', 1988]],
	[['Цветной бульвар', 1988]],
	[['Чеховская', 1987]],
	[['Боровицкая', 1986]],
	[['Полянка', 1986]],
	[['Серпуховская', 1983]],
	[['Тульская', 1983]],
	[['Нагатинская', 1983]],
	[['Нагорная', 1983]],
	[['Нахимовский проспект', 1983]],
	[['Севастопольская', 1983]],
	[['Чертановская', 1983]],
	[['Южная', 1983]],
	[['Пражская', 1985]],
	[['Улица Академика Янгеля', 2000]],
	[['Аннино', 2001]],
	[['Бульвар Дмитрия Донского', 2002]]
];
data.ClassesList[9] = "L8";

// Люблинско-Дмитровская линия:

data.CoordinatesList[10] = [
	[55.866719, 37.547101, -20, 164],
	[55.856483, 37.560845, -65, 154],
	[55.846034, 37.573987, -65, 157],
	[55.835018, 37.574497, -61, 166],
	[55.822978, 37.587636, -65, 162],
	[55.813400, 37.602525, -60, 161],
	[55.795237, 37.616572, -60, 162],
	[55.781482, 37.614894, -60, 155],
	[55.768612, 37.61989, -60, 145],
	[55.76707, 37.639415, -60, 161],
	[55.757056, 37.657019, -51, 154],
	[55.746192, 37.682134, -54, 139],
	[55.732694, 37.666596, -47, 135],
	[55.718704, 37.675967, -62, 144],
	[55.707504, 37.68503, -12, 129],
	[55.693441, 37.72692, -8, 121],
	[55.690953, 37.753161, -8, 134],
	[55.675784, 37.761915, -8, 135],
	[55.65979, 37.750639, -8, 123],
	[55.649994, 37.743134, -8, 117],
	[55.633523, 37.74373, -21, 125],
	[55.621186, 37.743674, -14, 159],
	[55.612452, 37.745183, -14, 159]
];
data.NamesList[10] = [
	[['Селигерская', 2018]],
	[['Верхние Лихоборы', 2018]],
	[['Окружная, ЛДЛ', 2018]],
	[['Петровско-Разумовская, ЛДЛ', 2016]],
	[['Фонвизинская', 2016]],
	[['Бутырская', 2016]],
	[['Марьина Роща', 2010]],
	[['Достоевская', 2010]],
	[['Трубная', 2007]],
	[['Сретенский бульвар', 2007]],
	[['Чкаловская', 1995]],
	[['Римская', 1995]],
	[['Крестьянская Застава', 1995]],
	[['Дубровка, ЛДЛ', 1999]],
	[['Кожуховская', 1995]],
	[['Печатники', 1995]],
	[['Волжская', 1995]],
	[['Люблино', 1996]],
	[['Братиславская', 1996]],
	[['Марьино', 1996]],
	[['Борисово', 2011]],
	[['Шипиловская', 2011]],
	[['Зябликово', 2011]]
];
data.ClassesList[10] = "L9";

// Каховская линия:

data.CoordinatesList[11] = [
	[55.652992, 37.59828, -8, 193],
	[55.653322, 37.619426, -9, 177],
	[55.655139, 37.648626, -7, 170]
];
data.NamesList[11] = [
	[['Каховская', 1969, 2019], ['Каховская', 2021]],
	[['Варшавская', 1969]],
	[['Каширская, КХЛ', 1969]]
];
data.ClassesList[11] = "L10";

// Бутовская линия:

data.CoordinatesList[12] = [
	[55.599956, 37.556875, -9.5, 220],
	[55.581989, 37.577230, -9.5, 178],
	[55.569657, 37.577156, -10, 169],
	[55.548118, 37.554717, 10, 185],
	[55.545351, 37.542924, 10, 176],
	[55.541839, 37.531156, 10, 173],
	[55.538019, 37.516059, 10, 168]
];
data.NamesList[12] = [
	[['Битцевский парк', 2014]],
	[['Лесопарковая', 2014]],
	[['Улица Старокачаловская', 2003]],
	[['Улица Скобелевская', 2003]],
	[['Бульвар Адмирала Ушакова', 2003]],
	[['Улица Горчакова', 2003]],
	[['Бунинская Аллея', 2003]]
];
data.ClassesList[12] = "L11";

// Монорельс:

data.CoordinatesList[13] = [
	[55.818993, 37.578693, 6, 163],
	[55.821927, 37.591299, 6, 162],
	[55.821827, 37.609115, 6, 158],
	[55.821825, 37.62696, 12, 156],
	[55.824029, 37.638405, 6, 144],
	[55.829233, 37.644906, 6, 139]
];
data.NamesList[13] = [
	[['Тимирязевская, М', 2004]],
	[['Ул. Милашенкова', 2004]],
	[['Телецентр', 2004]],
	[['Ул. Академика Королева', 2004]],
	[['Выставочный центр', 2004]],
	[['Ул. Сергея Эйзенштейна', 2004]]
];
data.ClassesList[13] = "M";


// Московское центральное кольцо:

data.CoordinatesList[14] = [
	[55.777087, 37.507381, 0, 143],
	[55.788541, 37.504328, 0, 148],
	[55.798953, 37.499050, 0, 161],
	[55.813684, 37.486921, 0, 163],
	[55.825879, 37.496378, 0, 162],
	[55.839601, 37.520111, 0, 169],
	[55.847071, 37.551010, 0, 157],
	[55.848924, 37.571191, 0, 155],
	[55.847355, 37.592434, 0, 156],
	[55.845556, 37.639716, 0, 143],
	[55.839634, 37.666988, 0, 143],
	[55.829346, 37.702442, 0, 146],
	[55.817227, 37.737037, 0, 148],
	[55.803966, 37.745985, 0, 142],
	[55.789666, 37.743281, 0, 141],
	[55.771321, 37.745051, 0, 156],
	[55.758791, 37.746210, 0, 149],
	[55.747280, 37.738029, 0, 143],
	[55.732475, 37.728352, 0, 136],
	[55.724144, 37.717022, 0, 133],
	[55.718427, 37.697635, 0, 134],
	[55.712692, 37.677883, 0, 139],
	[55.706477, 37.663292, 0, 133],
	[55.697886, 37.647575, 0, 129],
	[55.690087, 37.618628, 0, 133],
	[55.690011, 37.605040, 0, 143],
	[55.707128, 37.586071, 0, 146],
	[55.720956, 37.560204, 0, 125],
	[55.739993, 37.534364, 0, 145],
	[55.747616, 37.531902, 0, 130],
	[55.757327, 37.525572, 0, 135],
	[55.777087, 37.507381, 0, 143]
];
data.NamesList[14] = [
	[['Хорошёво', 2016]],
	[['Зорге', 2016]],
	[['Панфиловская', 2016]],
	[['Стрешнево', 2016]],
	[['Балтийская', 2016]],
	[['Коптево', 2016]],
	[['Лихоборы', 2016]],
	[['Окружная, МЦК', 2016]],
	[['Владыкино, МЦК', 2016]],
	[['Ботанический сад, МЦК', 2016]],
	[['Ростокино', 2016]],
	[['Белокаменная', 2016]],
	[['Бульвар Рокоссовского, МЦК', 2016]],
	[['Локомотив', 2016]],
	[['Измайлово', 2016]],
	[['Соколиная гора', 2016]],
	[['Шоссе Энтузиастов, МЦК', 2016]],
	[['Андроновка', 2016]],
	[['Нижегородская', 2016]],
	[['Новохохловская', 2016]],
	[['Угрешская', 2016]],
	[['Дубровка, МЦК', 2016]],
	[['Автозаводская, МЦК', 2016]],
	[['ЗИЛ', 2016]],
	[['Верхние Котлы', 2016]],
	[['Крымская', 2016]],
	[['Площадь Гагарина', 2016]],
	[['Лужники', 2016]],
	[['Кутузовская, МЦК', 2016]],
	[['Деловой центр, МЦК', 2016]],
	[['Шелепиха, МЦК', 2016]],
	[['', 2016]]
];
data.ClassesList[14] = "L12";

// Большая кольцевая линия вместе с Калининско-Солнцевской:

data.CoordinatesList[15] = [
	[55.757227, 37.523965, -18, 139],
	[55.776713, 37.519375, -21, 148],
	[55.786584, 37.533210, -28, 149],
	[55.791938, 37.557290, -25, 167],
	[55.792329, 37.586392, -65, 165]
];
data.NamesList[15] = [
	[['Шелепиха, БКЛ', 2018]],
	[['Хорошёвская, БКЛ', 2018]],
	[['ЦСКА, БКЛ', 2018]],
	[['Петровский парк, БКЛ', 2018]],
	[['Савеловская, БКЛ', 2018]]
];
data.ClassesList[15] = "L13";

// Большая кольцевая линия:

data.CoordinatesList[16] = [
	[55.757227, 37.523965, -18, 139],
	[55.749037, 37.539856, -30, 130]
];
data.NamesList[16] = [
	[['', 2018]],
	[['Деловой центр, БКЛ', 2018]]
];
data.ClassesList[16] = "L10";

// Некрасовская линия:

data.CoordinatesList[17] = [
	[55.703433, 37.851233, -27, 141],
	[55.710106, 37.880398, -27, 142],
	[55.708524, 37.900700, -27, 139],
	[55.702853, 37.928294, -16, 126]
];
data.NamesList[17] = [
	[['Косино', 2019]],
	[['Улица Дмитриевского', 2019]],
	[['Лухмановская', 2019]],
	[['Некрасовка', 2019]]
];
data.ClassesList[17] = "L14";

// Пересадки:
// (задаются попарно, станции идентифицируются по именам в настоящий момент времени)

data.Interchanges = [
	// Внутри Кольцевой линии:
	['Театральная', 'Охотный ряд'],
	['Арбатская, АПЛ', 'Библиотека имени Ленина'],
	['Арбатская, АПЛ', 'Боровицкая'],
	['Библиотека имени Ленина', 'Боровицкая'],
	['Александровский сад', 'Библиотека имени Ленина'],
	['Александровский сад', 'Арбатская, АПЛ'],
	['Театральная', 'Площадь революции'],
	['Тургеневская', 'Чистые пруды'],
	['Тургеневская', 'Сретенский бульвар'],
	['Чистые пруды', 'Сретенский бульвар'],
	['Третьяковская, КРЛ', 'Новокузнецкая'],
	['Третьяковская, КРЛ', 'Третьяковская, КЛЛ'],
	['Третьяковская, КЛЛ', 'Новокузнецкая'],
	['Пушкинская', 'Тверская'],
	['Пушкинская', 'Чеховская'],
	['Тверская', 'Чеховская'],
	['Цветной бульвар', 'Трубная'],
	['Кузнецкий мост', 'Лубянка'],
	['Китай-город, ТКЛ', 'Китай-город, КРЛ'],
	// На Кольцевой линии:
	['Парк Культуры, КЛ', 'Парк Культуры, СЛ'],
	['Комсомольская, КЛ', 'Комсомольская, СЛ'],
	['Белорусская, КЛ', 'Белорусская, ЗЛ'],
	['Павелецкая, КЛ', 'Павелецкая, ЗЛ'],
	['Киевская, КЛ', 'Киевская, АПЛ'],
	['Киевская, КЛ', 'Киевская, ФЛ'],
	['Киевская, АПЛ', 'Киевская, ФЛ'],
	['Курская, КЛ', 'Курская, АПЛ'],
	['Курская, КЛ', 'Чкаловская'],
	['Курская, АПЛ', 'Чкаловская'],
	['Проспект Мира, КЛ', 'Проспект Мира, КРЛ'],
	['Октябрьская, КРЛ', 'Октябрьская, КЛ'],
	['Добрынинская', 'Серпуховская'],
	['Краснопресненская', 'Баррикадная'],
	['Новослободская', 'Менделеевская'],
	['Таганская, КЛ', 'Таганская, ТКЛ'],
	['Таганская, КЛ', 'Марксистская'],
	['Таганская, ТКЛ', 'Марксистская'],
	// Вне Кольцевой линии:
	['Кунцевская, ФЛ', 'Кунцевская, АПЛ'],
	['Римская', 'Площадь Ильича'],
	['Крестьянская Застава', 'Пролетарская'],
	['Красногвардейская', 'Зябликово'],
	['Каховская', 'Севастопольская'],
	['Каширская, ЗЛ', 'Каширская, КХЛ'],
	['Улица Старокачаловская', 'Бульвар Дмитрия Донского'],
	['Выставочная', 'Деловой центр, КСЛ'],
	['Парк Победы, АПЛ', 'Парк Победы, КСЛ'],
	['Новоясеневская', 'Битцевский парк'],
	['Петровско-Разумовская, СТЛ', 'Петровско-Разумовская, ЛДЛ'],
	['Лермонтовский проспект', 'Косино'],
	// На Монорельсе:
	['Тимирязевская, М', 'Тимирязевская'],
	['Ул. Милашенкова', 'Фонвизинская'],
	['Выставочный центр', 'ВДНХ'],
	// На Московском центральном кольце:
	['Хорошёво', 'Полежаевская'],
	['Хорошёвская, КСЛ', 'Полежаевская'],
	['Хорошёвская, КСЛ', 'Хорошёво'],
	['Панфиловская', 'Октябрьское поле'],
	['Балтийская', 'Войковская'],
	['Владыкино, МЦК', 'Владыкино, СТЛ'],
	['Ботанический сад, МЦК', 'Ботанический сад, КРЛ'],
	['Бульвар Рокоссовского, МЦК', 'Бульвар Рокоссовского, СЛ'],
	['Локомотив', 'Черкизовская'],
	['Измайлово', 'Партизанская'],
	['Шоссе Энтузиастов, МЦК', 'Шоссе Энтузиастов, КЛЛ'],
	['Дубровка, МЦК', 'Дубровка, ЛДЛ'],
	['Автозаводская, МЦК', 'Автозаводская, ЗЛ'],
	['Верхние Котлы', 'Нагатинская'],
	['Площадь Гагарина', 'Ленинский проспект'],
	['Лужники', 'Спортивная'],
	['Кутузовская, МЦК', 'Кутузовская, ФЛ'],
	['Деловой центр, МЦК', 'Международная'],
	['Шелепиха, МЦК', 'Шелепиха, КСЛ'],
	['Окружная, МЦК', 'Окружная, ЛДЛ'],
	// На Большой кольцевой линии:
	['Савеловская, БКЛ', 'Савеловская, КСЛ'],
	['Савеловская, КСЛ', 'Савеловская, СТЛ'],
	['Петровский парк, КСЛ', 'Динамо'],
	['Петровский парк, БКЛ', 'Петровский парк, КСЛ'],
	['ЦСКА, БКЛ', 'ЦСКА, КСЛ'],
	['Хорошёвская, БКЛ', 'Хорошёвская, КСЛ'],
	['Шелепиха, БКЛ', 'Шелепиха, КСЛ'],
	['Деловой центр, БКЛ', 'Выставочная'],
	['Деловой центр, БКЛ', 'Деловой центр, КСЛ']
];