import { useState } from "react";
import axios from "axios";
import HomePage from "../../components/Homepage";
import CountryGrid from "../../components/CountryGrid";
import Pagination from "../../components/Pagination";

const RegionPage = ({ countries }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pageNumbers = Object.keys(countries);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<HomePage>
			<CountryGrid countries={countries[currentPage]} />
			<Pagination
				pageNumbers={pageNumbers}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</HomePage>
	);
};
const sortCountries = countries => {
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
	return sortedCountries;
};

RegionPage.getInitialProps = async context => {
	const { region } = context.query;
	const response = await axios.get(
		`https://restcountries.eu/rest/v2/region/${region}`
	);
	return { countries: sortCountries(response.data) };
};

export default RegionPage;
