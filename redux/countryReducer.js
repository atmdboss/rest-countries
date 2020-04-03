export const getCountry = isoCode => {
	return async dispatch => {
		const response = await window.fetch(
			`https://restcountries.eu/rest/v2/alpha/${isoCode}`
		);
		const country = await response.json();
		dispatch({
			type: "GET_COUNTRY",
			payload: country
		});
	};
};

const countryReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_COUNTRY":
			return action.payload;
			break;
		case "REMOVE_COUNTRY":
			return [];
			break;
		default:
			return state;
			break;
	}
};

export default countryReducer;
