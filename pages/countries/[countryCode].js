import axios from "axios";
import Router from "next/router";

const Country = ({ country }) => {
	return (
		<div className='container'>
			<div
				onClick={() => {
					Router.back();
				}}
				className='go-back'>
				&larr; Back
			</div>

			<div className='country-content'>
				<div className='flag'>
					<img src={country.flag} alt='' />
				</div>
				<div className='stats'>
					<h3 className='country-stats name'>{country.name}</h3>
					<p className='country-stats'>Native Name: {country.nativeName}</p>
					<p className='country-stats'>Population: {country.population}</p>
					<p className='country-stats'>Region: {country.region}</p>
					<p className='country-stats'>Sub Region: {country.subregion}</p>
					<p className='country-stats'>Capital: {country.capital}</p>
					<br />
					<p className='country-stats'>
						Currencies: {country.currencies.map((currency) => currency.name)}
					</p>
					<p className='country-stats'>
						Languages: {country.languages.map((language) => language.name)}
					</p>
				</div>
			</div>
		</div>
	);
};

Country.getInitialProps = async (context) => {
	const { countryCode } = context.query;
	const response = await axios.get(
		`https://restcountries.eu/rest/v2/alpha/${countryCode}`
	);
	return { country: response.data };
};

export default Country;
