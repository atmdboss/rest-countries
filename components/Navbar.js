import Link from "next/link";
export default () => {
	return (
		<nav className='container flex justify-between align-center'>
			<Link href='/' as='/'>
				<a>Where in the world?</a>
			</Link>
			<div className='theme-switch-wrapper'>
				<label className='theme-switch' htmlFor='checkbox'>
					<input type='checkbox' id='checkbox' />
					<div className='slider round'></div>
				</label>
				<em>Dark Mode</em>
			</div>
		</nav>
	);
};
