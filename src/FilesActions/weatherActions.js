
export const getResFor_5_DayActions = resultForWeek => {
	return {
		type: 'UPDATE-RES',
		payload: resultForWeek,
	};
};

export const getResDayActions = resultForDay => {
	return {
		type: 'UPDATE-DAY',
		payload: resultForDay,
	};
};
