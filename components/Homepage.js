import FilterSelect from "./FilterSelect";
import Searchbar from "./Searchbar";
const Homepage = (props) => {
	return (
		<>
			<div className='container search'>
				<Searchbar />
				<FilterSelect />
			</div>
			{props.children}
		</>
	);
};

export default Homepage;
