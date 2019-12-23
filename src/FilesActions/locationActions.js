
export const SavelocationKeyActions = (LocalizedName, Key) => {
	return {
		type: 'NEW-CITY',
		payload: {
			LocalizedName,
			Key,
		},
	};
};

