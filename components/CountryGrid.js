import CountryCard from "./CountryCard";
import Link from "next/link";

const CountryGrid = props => {
	return (
		<div>
			{props.countries &&
				props.countries.map(country => {
					return (
						<Link
							href='/countries/[countryCode]'
							as={`/countries/${country.alpha2Code}`}
							key={country.alpha2Code}>
							<a>
								<CountryCard
									flag={country.flag}
									population={country.population}
									region={country}
									capital={country.capital}
									name={country.name}
								/>
							</a>
						</Link>
					);
				})}
		</div>
	);
};

export default CountryGrid;
