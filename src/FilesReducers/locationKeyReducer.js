const initState = {
	cityName: 'haifa',
	citykey: 0,
};

const locationKeyReducer = (state = initState, action) => {
	switch (action.type) {
		case 'NEW-CITY':
			state = {
				...state,
				cityName: action.payload.LocalizedName,
				citykey: action.payload.Key,
			};
			break;
		default:
			break;
	}
	return state;
}
export default locationKeyReducer;
