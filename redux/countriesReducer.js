export const setCountries = countries => {
	return async dispatch => {
		let page = 1;
		const sortedCountries = countries.reduce((accumulator, currentValue) => {
			const tempArray = [currentValue];
			if (accumulator[page]) {
				accumulator[page] = accumulator[page].concat(tempArray);
				if (accumulator[page].length === 10) page++;
			} else {
				accumulator[page] = tempArray;
			}
			return accumulator;
		}, {});
		dispatch({
			type: "SET_COUNTRIES",
			payload: sortedCountries
		});
	};
};
const countriesReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_COUNTRIES":
			return action.payload;
			break;
		case "REMOVE_COUNTRIES":
			return {};
			break;
		default:
			return state;
			break;
	}
};

export default countriesReducer;
