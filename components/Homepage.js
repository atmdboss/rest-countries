import FilterSelect from "./FilterSelect";
import Searchbar from "./Searchbar";
const Homepage = props => {
	return (
		<>
			<Searchbar />
			<FilterSelect />
			{props.children}
		</>
	);
};

export default Homepage;
