import Link from "next/link";
const Index = () => {
	return (
		<div className='welcome'>
			<h1>Welcome</h1>
			<Link href='/regions/[region]' as='/regions/europe'>
				<a>Go To App</a>
			</Link>
		</div>
	);
};

export default Index;
