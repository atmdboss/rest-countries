import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";

const reducers = combineReducers({
	countries: countriesReducer,
	country: countryReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
