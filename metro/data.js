// Stations data


var data = {
	CoordinatesList: new Array(),
	/* 
		Coordinates of each station are organized as follows:
		
		CoordinatesList[LineNo][StationNo] = 
			[latitude, longitude, depth under ground (negative), local height of ground surface above sea level]
	*/
	NamesList: new Array(),
	/* 
		Contains names of stations and corresponding years. A station could be renamed, even multiple times.
		Information about name/year of a station is organized as follows:
		
		NamesList[LineNo][StationNo] = 
			[['Initial Name', year opened], ['New Name', year renamed], ...]
				
		A station could be closed for reconstruction for several years and then opened again. Then:
		
		NamesList[LineNo][StationNo] = 
			[['Name', year opened, year closed], ['Name (old of new)', year reopened], ...]
			
		Data about names/years of one station is sorted by year in increasing order.
	*/
	ClassesList: new Array(),
	/* Names of CSS classes identifying lines */
	Interchanges: new Array()
	/* Pairs of stations making interchanges (see below) */
};

// Koltsevaya Line (Ring Line):

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
	[55.761076, 37.577431, -36, 137]	/* hack, no station */
];
data.NamesList[0] = [
	[['Krasnopresnenskaya', 1954]],
	[['Belorusskaya, KL', 1952]],
	[['Novoslobodskaya', 1952]],
	[['Botanicheskiy Sad, KL', 1952], ['Prospekt Mira, KL', 1966]],
	[['Komsomolskaya, KL', 1952]],
	[['Kurskaya, KL', 1950]],
	[['Taganskaya, KL', 1950]],
	[['Paveletskaya, KL', 1950]],
	[['Serpukhovskaya', 1950], ['Dobryninskaya', 1961]],
	[['Kaluzhskaya', 1950], ['Oktyabrskaya, KL', 1961]],
	[['Park Kultury im. Gorkogo, KL', 1950], ['Park Kultury, KL', 1980, 2011], ['Park Kultury, KL', 2012]],
	[['Kiyevskaya, KL', 1954]],
	[['', 1954]]	/* hack, no station */
];
data.ClassesList[0] = "L0";

// Sokolnicheskaya Line:

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
	[['Kommunarka', 2019]],
	[['Olkhovaya', 2019]],
	[['Prokshino', 2019]],
	[['Filatov Lug', 2019]],
	[['Salaryevo', 2016]],
	[['Rumyantsevo', 2016]],
	[['Troparyovo', 2014]],
	[['Yugo-Zapadnaya', 1963]],
	[['Prospekt Vernadskogo', 1963]],
	[['Universitet', 1959]],
	[['Leninskie Gory', 1959, 1983], ['Vorobyovy Gory', 2002]],
	[['Sportivnaya', 1957]],
	[['Frunzenskaya', 1957, 2016], ['Frunzenskaya', 2017]],
	[['Park Kultury im. Gorkogo, SL', 1935], ['Park Kultury, SL', 1980]],
	[['Dvorets Sovetov', 1935], ['Kropotkinskaya', 1957]],
	[['Biblioteka Imeni Lenina', 1935]],
	[['Okhotny Ryad', 1935], ['Imeni Kaganovicha', 1955], ['Okhotny Ryad', 1957], ['Prospekt Marksa', 1961], ['Okhotny Ryad', 1990]],
	[['Dzerzhinskaya', 1935], ['Lubyanka', 1990]],
	[['Kirovskaya', 1935, 1941], ['Kirovskaya', 1945], ['Chistiye Prudy', 1990]],
	[['Krasniye Vorota', 1935], ['Lermontovskaya', 1962], ['Krasniye Vorota', 1986]],
	[['Komsomolskaya, SL', 1935]],
	[['Krasnoselskaya', 1935]],
	[['Sokolniki', 1935]],
	[['Preobrazhenskaya Ploshchad', 1965]],
	[['Cherkizovskaya', 1990]],
	[['Ulitsa Podbelskogo', 1990], ['Bulvar Rokossovskogo, SL', 2014]]
];
data.ClassesList[1] = "L1";

// Zamoskvoretskaya Line:

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
	[['Khovrino', 2017]],
	[['Belomorskaya', 2018]],
	[['Rechnoy Vokzal', 1964]],
	[['Vodny Stadion', 1964]],
	[['Voykovskaya', 1964]],
	[['Sokol', 1938]],
	[['Aeroport', 1938]],
	[['Dinamo', 1938]],
	[['Belorusskaya, ZL', 1938]],
	[['Mayakovskaya', 1938]],
	[['Gorkovskaya', 1979], ['Tverskaya', 1990]],
	[['Ploshchad Sverdlova', 1938], ['Teatralnaya', 1990]],
	[['Novokuznetskaya', 1943]],
	[['Paveletskaya, ZL', 1943]],
	[['Zavod im. Stalina', 1943], ['Avtozavodskaya, ZL', 1956]],
	[['Tekhnopark', 2015]],
	[['Kolomenskaya', 1969]],
	[['Kashirskaya, ZL', 1969]],
	[['Kantemirovskaya', 1984]],
	[['Lenino', 1984], ['Tsaritsyno', 1990]],
	[['Orekhovo', 1984]],
	[['Domodedovskaya', 1985]],
	[['Krasnogvardeyskaya', 1985]],
	[['Alma-Atinskaya', 2012]]
];
data.ClassesList[2] = "L2";

// Arbatsko-Pokrovskaya Line:

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
	[['Pyatnitskoye Shosse', 2012]],
	[['Mitino', 2009]],
	[['Volokolamskaya', 2009]],
	[['Myakinino', 2009]],
	[['Strogino', 2008]],
	[['Krylatskoye', 1989]],
	[['Molodyozhnaya', 1965]],
	[['Kuntsevskaya, APL', 2008]],
	[['Slavyansky Bulvar', 2008]],
	[['Park Pobedy, APL', 2003]],
	[['Kiyevskaya, APL', 1953]],
	[['Smolenskaya, APL', 1953]],
	[['Arbatskaya, APL', 1953]],
	[['Ploshchad Revolyutsii', 1938]],
	[['Kurskaya, APL', 1938]],
	[['Baumanskaya', 1944, 2015], ['Baumanskaya', 2016]],
	[['Elektrozavodskaya', 1944, 2007], ['Elektrozavodskaya', 2008]],
	[['Stalinskaya', 1944], ['Semyonovskaya', 1961, 2005], ['Semyonovskaya', 2006]],
	[['Izmaylovskiy Park Kultury i Otdykha im. Stalina', 1944], ['Izmaylovskaya', 1948], ['Izmaylovskiy Park', 1963], ['Partizanskaya', 2005]],
	[['Pervomayskaya', 1954], ['Izmaylovskiy Park', 1961], ['Izmaylovskaya', 1963]],
	[['Pervomayskaya', 1961]],
	[['Shchyolkovskaya', 1963]]
];
data.ClassesList[3] = "L3";

// Filyovskaya Line:

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
	[55.749965, 37.541218, -22.5, 130],	/* hack, no station */
	[55.743529, 37.565299, -9, 126],	/* hack, no station */
	[55.748741, 37.582342, -8, 141],
	[55.751861, 37.601206, -8, 143],
	[55.75252, 37.609049, -7, 145]
];
data.NamesList[4] = [
	[['Kuntsevskaya, FL', 1965]],
	[['Pionerskaya', 1961]],
	[['Filyovsky Park', 1961]],
	[['Bagrationovskaya', 1961]],
	[['Fili', 1959]],
	[['Kutuzovskaya, FL', 1958]],
	[['Studencheskaya', 1958]],
	[['Kiyevskaya', 1937, 1953], ['Kiyevskaya, FL', 1958]],
	[['Delovoy Tsentr', 2005], ['Vystavochnaya', 2008]],
	[['Mezhdunarodnaya', 2006]],
	[['', 2005]], /* hack, no station */
	[['', 1937]], /* hack, no station */
	[['Smolenskaya', 1935, 1953], ['Smolenskaya, FL', 1958]],
	[['Arbatskaya', 1935, 1953], ['Arbatskaya, FL', 1958]],
	[['Ul. Kominterna', 1935], ['Kalininskaya', 1946, 1953], ['Kalininskaya', 1958], ['Alexandrovsky Sad', 1990]]
];
data.ClassesList[4] = "L4";

// Kaluzhsko-Rizhskaya Line:

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
	[['Medvedkovo', 1978]],
	[['Babushkinskaya', 1978]],
	[['Sviblovo', 1978]],
	[['Botanicheskiy Sad, KRL', 1978]],
	[['VSKhV', 1958], ['VDNKh', 1959]],
	[['Mir', 1958], ['Shcherbakovskaya', 1966], ['Alexeyevskaya', 1990]],
	[['Rizhskaya', 1958]],
	[['Botanicheskiy Sad, KRL', 1958], ['Prospekt Mira, KRL', 1966]],
	[['Kolkhoznaya', 1972], ['Sukharevskaya', 1990]],
	[['Turgenevskaya', 1972]],
	[['Ploshchad Nogina, KRL', 1971], ['Kitay-Gorod, KRL', 1990]],
	[['Novokuznetskaya', 1971], ['Tretyakovskaya, KRL', 1983]],
	[['Oktyabrskaya, KRL', 1962]],
	[['Shabolovskaya', 1980]],
	[['Leninskiy Prospekt', 1962]],
	[['Akademicheskaya', 1962]],
	[['Profsoyuznaya', 1962]],
	[['Noviye Cheryomushki', 1962]],
	[['Kaluzhskaya', 1964], ['Kaluzhskaya', 1974]],
	[['Belyayevo', 1974]],
	[['Konkovo', 1987]],
	[['Tyoplyi Stan', 1987]],
	[['Yasenevo', 1990]],
	[['Bitsevsky Park', 1990], ['Novoyasenevskaya', 2008]]
];
data.ClassesList[5] = "L5";

// Tagansko-Krasnopresnenskaya Line:

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
	[['Planernaya', 1975]],
	[['Skhodnenskaya', 1975]],
	[['Tushinskaya', 1975]],
	[['Spartak', 2014]],
	[['Shchukinskaya', 1975]],
	[['Oktyabrskoye Pole', 1972]],
	[['Polezhaevskaya', 1972]],
	[['Begovaya', 1972]],
	[['Ulitsa 1905 Goda', 1972]],
	[['Barrikadnaya', 1972]],
	[['Pushkinskaya', 1975]],
	[['Kuznetsky Most', 1975]],
	[['Ploshchad Nogina, TKL', 1971], ['Kitay-Gorod, TKL', 1990]],
	[['Taganskaya, TKL', 1966]],
	[['Proletarskaya', 1966]],
	[['Volgogradsky Prospekt', 1966]],
	[['Tekstilshchiki', 1966]],
	[['Kuzminki', 1966]],
	[['Ryazanskiy Prospekt', 1966]],
	[['Zhdanovskaya', 1966], ['Vykhino', 1989]],
	[['Lermontovsky Prospekt', 2013]],
	[['Zhulebino', 2013]],
	[['Kotelniki', 2015]]
];
data.ClassesList[6] = "L6";

// Kalininskaya Line:

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
	[['Tretyakovskaya, KLL', 1986]],
	[['Marksistskaya', 1979]],
	[['Ploshchad Ilicha', 1979]],
	[['Aviamotornaya', 1979]],
	[['Shosse Entuziastov, KLL', 1979]],
	[['Perovo', 1979]],
	[['Novogireevo', 1979]],
	[['Novokosino', 2012]]
];
data.ClassesList[7] = "L7";

// Kalininskaya-Solntsevskaya Line:

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
	[['Rasskazovka', 2018]],
	[['Novoperedelkino', 2018]],
	[['Borovskoe Shosse', 2018]],
	[['Solntsevo', 2018]],
	[['Govorovo', 2018]],
	[['Ozernaya', 2018]],
	[['Michurinskiy Prospekt', 2018]],
	[['Ramenki', 2017]],
	[['Lomonosovskiy Prospekt', 2017]],
	[['Minskaya', 2017]],
	[['Park Pobedy, KSL', 2014]],
	[['Delovoy Tsentr, KSL', 2014, 2018]],
	[['', 2018]],
	[['Shelepikha, KSL', 2018]],
	[['Khoroshevskaya, KSL', 2018]],
	[['CSKA, KSL', 2018]],
	[['Petrovsky Park, KSL', 2018]],
	[['Savyolovskaya, KSL', 2018]]
];
data.ClassesList[8] = "L7";

// Serpukhovsko-Timiryazevskaya Line:

data.CoordinatesList[9] = [
	[55.897962, 37.587184, -9, 169],
	[55.883762, 37.60327, -10, 154],
	[55.863311, 37.604754, -9, 144],
	[55.847322, 37.590071, -11, 157],
	[55.834903, 37.574803, -61, 166],
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
	[['Altufyevo', 1994]],
	[['Bibirevo', 1992]],
	[['Otradnoye', 1991]],
	[['Vladykino, STL', 1991]],
	[['Petrovsko-Razumovskaya, STL', 1991]],
	[['Timiryazevskaya', 1991]],
	[['Dmitrovskaya', 1991]],
	[['Savyolovskaya, STL', 1988]],
	[['Mendeleyevskaya', 1988]],
	[['Tsvetnoy Bulvar', 1988]],
	[['Chekhovskaya', 1987]],
	[['Borovitskaya', 1986]],
	[['Polyanka', 1986]],
	[['Serpukhovskaya', 1983]],
	[['Tulskaya', 1983]],
	[['Nagatinskaya', 1983]],
	[['Nagornaya', 1983]],
	[['Nakhimovsky Prospekt', 1983]],
	[['Sevastopolskaya', 1983]],
	[['Chertanovskaya', 1983]],
	[['Yuzhnaya', 1983]],
	[['Prazhskaya', 1985]],
	[['Ulitsa Akademika Yangelya', 2000]],
	[['Annino', 2001]],
	[['Bulvar Dmitriya Donskogo', 2002]]
];
data.ClassesList[9] = "L8";

// Lyublinsko-Dmitrovskaya Line:

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
	[['Seligerskaya', 2018]],
	[['Verkhnie Likhobory', 2018]],
	[['Okruzhnaya, LDL', 2018]],
	[['Petrovsko-Razumovskaya, LDL', 2016]],
	[['Fonvizinskaya', 2016]],
	[['Butyrskaya', 2016]],
	[['Maryina Roshcha', 2010]],
	[['Dostoyevskaya', 2010]],
	[['Trubnaya', 2007]],
	[['Sretensky Bulvar', 2007]],
	[['Chkalovskaya', 1995]],
	[['Rimskaya', 1995]],
	[['Krestyanskaya Zastava', 1995]],
	[['Dubrovka, LDL', 1999]],
	[['Kozhukhovskaya', 1995]],
	[['Pechatniki', 1995]],
	[['Volzhskaya', 1995]],
	[['Lyublino', 1996]],
	[['Bratislavskaya', 1996]],
	[['Maryino', 1996]],
	[['Borisovo', 2011]],
	[['Shipilovskaya', 2011]],
	[['Zyablikovo', 2011]]
];
data.ClassesList[10] = "L9";

// Kakhovskaya Line:

data.CoordinatesList[11] = [
	[55.652992, 37.59828, -8, 193],
	[55.653322, 37.619426, -9, 177],
	[55.655139, 37.648626, -7, 170]
];
data.NamesList[11] = [
	[['Kakhovskaya', 1969, 2019], ['Kakhovskaya', 2021]],
	[['Varshavskaya', 1969]],
	[['Kashirskaya, KHL', 1969]]
];
data.ClassesList[11] = "L10";

// Butovskaya Light Metro Line (above ground):

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
	[['Bitsevsky Park', 2014]],
	[['Lesoparkovaya', 2014]],
	[['Ulitsa Starokachalovskaya', 2003]],
	[['Ulitsa Skobelevskaya', 2003]],
	[['Bulvar Admirala Ushakova', 2003]],
	[['Ulitsa Gorchakova', 2003]],
	[['Buninskaya Alleya', 2003]]
];
data.ClassesList[12] = "L11";

// Monorail Line (above ground):

data.CoordinatesList[13] = [
	[55.818993, 37.578693, 6, 163],
	[55.821927, 37.591299, 6, 162],
	[55.821827, 37.609115, 6, 158],
	[55.821825, 37.62696, 12, 156],
	[55.824029, 37.638405, 6, 144],
	[55.829233, 37.644906, 6, 139]
];
data.NamesList[13] = [
	[['Timiryazevskaya, M', 2004]],
	[['Ul. Milashenkova', 2004]],
	[['Teletsentr', 2004]],
	[['Ul. Akademika Korolyova', 2004]],
	[['Vystavochy Tsentr', 2004]],
	[['Ul. Sergeya Eyzenshteyna', 2004]]
];
data.ClassesList[13] = "M";

// Moscow Central Ring:

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
	[['Khoroshevo', 2016]],
	[['Zorge', 2016]],
	[['Panfilovskaya', 2016]],
	[['Streshnevo', 2016]],
	[['Baltiyskaya', 2016]],
	[['Koptevo', 2016]],
	[['Likhobory', 2016]],
	[['Okruzhnaya, MCC', 2016]],
	[['Vladykino, MCC', 2016]],
	[['Botanicheskiy Sad, MCC', 2016]],
	[['Rostokino', 2016]],
	[['Belokamennaya', 2016]],
	[['Bulvar Rokossovskogo, MCC', 2016]],
	[['Lokomotiv', 2016]],
	[['Izmaylovo', 2016]],
	[['Sokolinaya Gora', 2016]],
	[['Shosse Entuziastov, MCC', 2016]],
	[['Andronovka', 2016]],
	[['Nizhegorodskaya', 2016]],
	[['Novokhokhlovskaya', 2016]],
	[['Ugreshskaya', 2016]],
	[['Dubrovka, MCC', 2016]],
	[['Avtozavodskaya, MCC', 2016]],
	[['ZIL', 2016]],
	[['Verkhnie Kotly', 2016]],
	[['Krymskaya', 2016]],
	[['Ploshchad Gagarina', 2016]],
	[['Luzhniki', 2016]],
	[['Kutuzovskaya, MCC', 2016]],
	[['Delovoy Tsentr, MCC', 2016]],
	[['Shelepikha, MCC', 2016]],
	[['', 2016]]
];
data.ClassesList[14] = "L12";

// Big Ring Line together with Kalininsko-Solntsevskaya Line:

data.CoordinatesList[15] = [
	[55.757227, 37.523965, -18, 139],
	[55.776713, 37.519375, -21, 148],
	[55.786584, 37.533210, -28, 149],
	[55.791938, 37.557290, -25, 167],
	[55.792329, 37.586392, -65, 165]
];
data.NamesList[15] = [
	[['Shelepikha, BRL', 2018]],
	[['Khoroshevskaya, BRL', 2018]],
	[['CSKA, BRL', 2018]],
	[['Petrovsky Park, BRL', 2018]],
	[['Savyolovskaya, BRL', 2018]]
];
data.ClassesList[15] = "L13";

// Big Ring Line:

data.CoordinatesList[16] = [
	[55.757227, 37.523965, -18, 139],
	[55.749037, 37.539856, -30, 130]
];
data.NamesList[16] = [
	[['', 2018]],
	[['Delovoy Tsentr, BRL', 2018]]
];
data.ClassesList[16] = "L10";

// Nekrasovskaya Line:

data.CoordinatesList[17] = [
	[55.703433, 37.851233, -27, 141],
	[55.710106, 37.880398, -27, 142],
	[55.708524, 37.900700, -27, 139],
	[55.702853, 37.928294, -16, 126]
];
data.NamesList[17] = [
	[['Kosino', 2019]],
	[['Ulitsa Dmitriyevskogo', 2019]],
	[['Lukhmanovskaya', 2019]],
	[['Nekrasovka', 2019]]
];
data.ClassesList[17] = "L14";

// Interchanges:
/* 
	Pairs of stations making interchanges. 
	Stations are identified by their latest names.
*/

data.Interchanges = [
	// Inside the Ring Line:
	['Teatralnaya', 'Okhotny Ryad'],
	['Arbatskaya, APL', 'Biblioteka Imeni Lenina'],
	['Arbatskaya, APL', 'Borovitskaya'],
	['Biblioteka Imeni Lenina', 'Borovitskaya'],
	['Alexandrovsky Sad', 'Biblioteka Imeni Lenina'],
	['Alexandrovsky Sad', 'Arbatskaya, APL'],
	['Teatralnaya', 'Ploshchad Revolyutsii'],
	['Turgenevskaya', 'Chistiye Prudy'],
	['Turgenevskaya', 'Sretensky Bulvar'],
	['Chistiye Prudy', 'Sretensky Bulvar'],
	['Tretyakovskaya, KRL', 'Novokuznetskaya'],
	['Tretyakovskaya, KRL', 'Tretyakovskaya, KLL'],
	['Tretyakovskaya, KLL', 'Novokuznetskaya'],
	['Pushkinskaya', 'Tverskaya'],
	['Pushkinskaya', 'Chekhovskaya'],
	['Tverskaya', 'Chekhovskaya'],
	['Tsvetnoy Bulvar', 'Trubnaya'],
	['Kuznetsky Most', 'Lubyanka'],
	['Kitay-Gorod, TKL', 'Kitay-Gorod, KRL'],
	// On the Ring Line:
	['Park Kultury, KL', 'Park Kultury, SL'],
	['Komsomolskaya, KL', 'Komsomolskaya, SL'],
	['Belorusskaya, KL', 'Belorusskaya, ZL'],
	['Paveletskaya, KL', 'Paveletskaya, ZL'],
	['Kiyevskaya, KL', 'Kiyevskaya, APL'],
	['Kiyevskaya, KL', 'Kiyevskaya, FL'],
	['Kiyevskaya, APL', 'Kiyevskaya, FL'],
	['Kurskaya, KL', 'Kurskaya, APL'],
	['Kurskaya, KL', 'Chkalovskaya'],
	['Kurskaya, APL', 'Chkalovskaya'],
	['Prospekt Mira, KL', 'Prospekt Mira, KRL'],
	['Oktyabrskaya, KRL', 'Oktyabrskaya, KL'],
	['Dobryninskaya', 'Serpukhovskaya'],
	['Krasnopresnenskaya', 'Barrikadnaya'],
	['Novoslobodskaya', 'Mendeleyevskaya'],
	['Taganskaya, KL', 'Taganskaya, TKL'],
	['Taganskaya, KL', 'Marksistskaya'],
	['Taganskaya, TKL', 'Marksistskaya'],
	// Outside the Ring Line:
	['Kuntsevskaya, FL', 'Kuntsevskaya, APL'],
	['Rimskaya', 'Ploshchad Ilicha'],
	['Krestyanskaya Zastava', 'Proletarskaya'],
	['Krasnogvardeyskaya', 'Zyablikovo'],
	['Kakhovskaya', 'Sevastopolskaya'],
	['Kashirskaya, ZL', 'Kashirskaya, KHL'],
	['Ulitsa Starokachalovskaya', 'Bulvar Dmitriya Donskogo'],
	['Vystavochnaya', 'Delovoy Tsentr, KSL'],
	['Park Pobedy, APL', 'Park Pobedy, KSL'],
	['Novoyasenevskaya', 'Bitsevsky Park'],
	['Petrovsko-Razumovskaya, STL', 'Petrovsko-Razumovskaya, LDL'],
	['Lermontovsky Prospekt', 'Kosino'],
	// On Monorail:
	['Timiryazevskaya, M', 'Timiryazevskaya'],
	['Ul. Milashenkova', 'Fonvizinskaya'],
	['Vystavochy Tsentr', 'VDNKh'],
	// On the Moscow Central Ring:
	['Khoroshevo', 'Polezhaevskaya'],
	['Khoroshevskaya, KSL', 'Polezhaevskaya'],
	['Khoroshevskaya, KSL', 'Khoroshevo'],
	['Panfilovskaya', 'Oktyabrskoye Pole'],
	['Baltiyskaya', 'Voykovskaya'],
	['Vladykino, MCC', 'Vladykino, STL'],
	['Botanicheskiy Sad, MCC', 'Botanicheskiy Sad, KRL'],
	['Bulvar Rokossovskogo, MCC', 'Bulvar Rokossovskogo, SL'],
	['Lokomotiv', 'Cherkizovskaya'],
	['Izmaylovo', 'Partizanskaya'],
	['Shosse Entuziastov, MCC', 'Shosse Entuziastov, KLL'],
	['Dubrovka, MCC', 'Dubrovka, LDL'],
	['Avtozavodskaya, MCC', 'Avtozavodskaya, ZL'],
	['Verkhnie Kotly', 'Nagatinskaya'],
	['Ploshchad Gagarina', 'Leninskiy Prospekt'],
	['Luzhniki', 'Sportivnaya'],
	['Kutuzovskaya, MCC', 'Kutuzovskaya, FL'],
	['Delovoy Tsentr, MCC', 'Mezhdunarodnaya'],
	['Shelepikha, MCC', 'Shelepikha, KSL'],
	['Okruzhnaya, MCC', 'Okruzhnaya, LDL'],
	// On the Big Ring Line:
	['Savyolovskaya, BRL', 'Savyolovskaya, KSL'],
	['Savyolovskaya, KSL', 'Savyolovskaya, STL'],
	['Petrovsky Park, KSL', 'Dinamo'],
	['Petrovsky Park, BRL', 'Petrovsky Park, KSL'],
	['CSKA, BRL', 'CSKA, KSL'],
	['Khoroshevskaya, BRL', 'Khoroshevskaya, KSL'],
	['Shelepikha, BRL', 'Shelepikha, KSL'],
	['Delovoy Tsentr, BRL', 'Vystavochnaya'],
	['Delovoy Tsentr, BRL', 'Delovoy Tsentr, KSL']
];