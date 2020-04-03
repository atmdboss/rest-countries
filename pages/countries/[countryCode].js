import axios from "axios";
const Country = ({ country }) => {
	return (
		<div>
			<div className='flag'>
				<img src={country.flag} alt='' />
			</div>
			<h3>{country.name}</h3>
			<p>Native Name: {country.nativeName}</p>
			<p>Population: {country.population}</p>
			<p>Region: {country.region}</p>
			<p>Sub Region: {country.subregion}</p>
			<p>Capital: {country.capital}</p>
			<br />
			<p>Currencies: {country.currencies.map(currency => currency.name)}</p>
			<p>Languages: {country.languages.map(language => language.name)}</p>
			{/* <div>
    todo: need to know which border country alpha3code corresponds to border country name
        <h3>Border Countries:</h3>
        {country.borders.map(border=> border //returns alpha3code (e.g ["VEN", "BRA"]))}
    </div> */}
		</div>
	);
};

Country.getInitialProps = async context => {
	const { countryCode } = context.query;
	const response = await axios.get(
		`https://restcountries.eu/rest/v2/alpha/${countryCode}`
	);
	return { country: response.data };
};

export default Country;
