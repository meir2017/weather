const initState = {
	res_5:[],
	res_1_day: {
			},
	
	day: false,
	week: true,
};
const weatherReducer = (state = initState, action) => {
	switch (action.type) {
		case 'UPDATE-RES':
			let temp = initState.res_5;
			temp = action.payload;
			state = { ...state, res_5: temp };
			break;

		case 'UPDATE-DAY':
			;
			let tempDay = initState.res_1_day;
			tempDay= action.payload;
			state = { ...state, res_1_day: tempDay, day: true };

			break;
		default:
			break;
	}
	return state;
};
export default weatherReducer;
/* 
const initState = {
	res_5: [
		{
			Date: '2019-12-19T07:00:00+02:00',
			EpochDate: 1576731600,
			Temperature: {
				Minimum: {
					Value: 51,
					Unit: 'F',
					UnitType: 18,
				},
				Maximum: {
					Value: 70,
					Unit: 'F',
					UnitType: 18,
				},
			},
			Day: {
				Icon: 1,
				IconPhrase: 'Sunny',
				HasPrecipitation: false,
			},
			Night: {
				Icon: 33,
				IconPhrase: 'Clear',
				HasPrecipitation: false,
			},
			Sources: ['AccuWeather'],
			MobileLink: 'http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us',
			Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us',
		},
		{
			Date: '2019-12-20T07:00:00+02:00',
			EpochDate: 1576818000,
			Temperature: {
				Minimum: {
					Value: 49,
					Unit: 'F',
					UnitType: 18,
				},
				Maximum: {
					Value: 70,
					Unit: 'F',
					UnitType: 18,
				},
			},
			Day: {
				Icon: 1,
				IconPhrase: 'Sunny',
				HasPrecipitation: false,
			},
			Night: {
				Icon: 33,
				IconPhrase: 'Clear',
				HasPrecipitation: false,
			},
			Sources: ['AccuWeather'],
			MobileLink: 'http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us',
			Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us',
		},
		{
			Date: '2019-12-21T07:00:00+02:00',
			EpochDate: 1576904400,
			Temperature: {
				Minimum: {
					Value: 47,
					Unit: 'F',
					UnitType: 18,
				},
				Maximum: {
					Value: 68,
					Unit: 'F',
					UnitType: 18,
				},
			},
			Day: {
				Icon: 2,
				IconPhrase: 'Mostly sunny',
				HasPrecipitation: false,
			},
			Night: {
				Icon: 34,
				IconPhrase: 'Mostly clear',
				HasPrecipitation: false,
			},
			Sources: ['AccuWeather'],
			MobileLink: 'http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us',
			Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us',
		},
		{
			Date: '2019-12-22T07:00:00+02:00',
			EpochDate: 1576990800,
			Temperature: {
				Minimum: {
					Value: 49,
					Unit: 'F',
					UnitType: 18,
				},
				Maximum: {
					Value: 66,
					Unit: 'F',
					UnitType: 18,
				},
			},
			Day: {
				Icon: 2,
				IconPhrase: 'Mostly sunny',
				HasPrecipitation: false,
			},
			Night: {
				Icon: 34,
				IconPhrase: 'Mostly clear',
				HasPrecipitation: false,
			},
			Sources: ['AccuWeather'],
			MobileLink: 'http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us',
			Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us',
		},
		{
			Date: '2019-12-23T07:00:00+02:00',
			EpochDate: 1577077200,
			Temperature: {
				Minimum: {
					Value: 52,
					Unit: 'F',
					UnitType: 18,
				},
				Maximum: {
					Value: 67,
					Unit: 'F',
					UnitType: 18,
				},
			},
			Day: {
				Icon: 1,
				IconPhrase: 'Sunny',
				HasPrecipitation: false,
			},
			Night: {
				Icon: 34,
				IconPhrase: 'Mostly clear',
				HasPrecipitation: false,
			},
			Sources: ['AccuWeather'],
			MobileLink: 'http://m.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us',
			Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us',
		},
	],
	// res_1_day:[],
	res_1_day: {
			DateTime: '2019-12-20T21:00:00+02:00',
			EpochDateTime: 1576868400,
			WeatherIcon: 33,
			IconPhrase: 'Clear',
			HasPrecipitation: false,
			IsDaylight: false,
			Temperature: {
				Value: 55,
				Unit: 'F',
				UnitType: 18,
			},
			PrecipitationProbability: 0,
			MobileLink:
				'http://m.accuweather.com/en/il/haifa/213181/hourly-weather-forecast/213181?day=1&hbhhour=21&lang=en-us',
			Link:
				'http://www.accuweather.com/en/il/haifa/213181/hourly-weather-forecast/213181?day=1&hbhhour=21&lang=en-us',
		},
	
	day: true,
	week: false,
};
const weatherReducer = (state = initState, action) => {
	switch (action.type) {
		case 'UPDATE-RES':
			let temp = initState.res_5;
			temp = action.payload;
			state = { ...state, res_5: temp };
			break;

		case 'UPDATE-DAY':
			;
			let tempDay = initState.res_1_day;
			tempDay= action.payload;
			state = { ...state, res_1_day: tempDay, day: true };

			break;
		default:
			break;
	}
	return state;
};
export default weatherReducer;


*/