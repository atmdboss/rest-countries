import Link from "next/link";
export default () => {
	const handleMode = (e) => {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	};
	return (
		<nav className='container flex justify-between align-center nav'>
			<Link href='/' as='/'>
				<a>Where in the world?</a>
			</Link>
			<div className='theme-switch-wrapper'>
				<label className='theme-switch' htmlFor='checkbox'>
					<input type='checkbox' id='checkbox' onChange={handleMode} />
					<div className='slider round'></div>
				</label>
				<em>Dark Mode</em>
			</div>
		</nav>
	);
};
