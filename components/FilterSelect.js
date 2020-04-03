import { useState, useEffect } from "react";
// import { getCountries } from "../redux/countriesReducer";
// import { connect } from "react-redux";
import { useRouter } from "next/router";

const FilterSelect = () => {
	const [value, setValue] = useState("");
	// useEffect(() => {
	// 	// router.push(`/regions/${value}`);
	// }, [value]);
	const router = useRouter();
	const handleChange = ({ target }) => {
		router.push("/regions/[region]", `/regions/${target.value}`);
		setValue(target.value);
	};
	return (
		<select value={value} onChange={handleChange} name='regions' id='regions'>
			<option value='' disabled>
				Filter by region
			</option>
			<option value='africa'>Africa</option>
			<option value='americas'>Americas</option>
			<option value='asia'>Asia</option>
			<option value='europe'>Europe</option>
			<option value='oceania'>Oceania</option>
		</select>
	);
};

export default FilterSelect;
