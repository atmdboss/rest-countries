import { useState } from "react";
import Router from "next/router";

export default () => {
	const [value, setValue] = useState("");

	const handleChange = ({ target }) => {
		setValue(target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		Router.push("/search/[search]", `/search/${value}`);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} value={value} type='text' />
			<input type='submit' value='&#128269;' />
		</form>
	);
};
