const Pagination = ({ paginate, pageNumbers }) => {
	return (
		<nav className='container'>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a
							onClick={(evt) => {
								evt.preventDefault();
								paginate(number);
							}}
							href='!#'
							className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
