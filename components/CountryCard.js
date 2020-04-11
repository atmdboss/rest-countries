export default (props) => {
	const {
		flag,
		name,
		population,
		region: { region },
		capital,
	} = props;

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={flag} alt='' />
			</div>
			<div className='card-content container'>
				<h3 className='head'>{name}</h3>
				<br />
				<p>
					<span className='text-bold'>Population</span>:{population}
				</p>
				<p>
					<span className='text-bold'>Region</span>:{region}
				</p>
				<p>
					<span className='text-bold'>Capital</span>:{capital}
				</p>
			</div>
		</div>
	);
};
