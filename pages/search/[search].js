import axios from "axios";
import HomePage from "../../components/Homepage";
import CountryGrid from "../../components/CountryGrid";

const SearchPage = ({ countries, message }) => {
	if (message) return <div>{message}</div>;
	return (
		<HomePage>
			<CountryGrid countries={countries} />
		</HomePage>
	);
};

SearchPage.getInitialProps = async context => {
	const { search } = context.query;
	const response = await axios.get(
		`https://restcountries.eu/rest/v2/name/${search}`
	);
	if (response.status === 404) return { message: "Sorry...nothing was found" };
	return { countries: response.data };
};

export default SearchPage;
