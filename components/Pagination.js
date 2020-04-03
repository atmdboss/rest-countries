// const App = () => {

// 	// const [postsPerPage] = useState(10);

// 	// Get current posts
// 	// const indexOfLastPost = currentPage * postsPerPage;
// 	// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// 	// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// 	// Change page

// 	return (
// 		<div className='container mt-5'>
// 			<h1 className='text-primary mb-3'>My Blog</h1>
// 			<Posts posts={currentPosts} loading={loading} />
// 			<Pagination
// 				postsPerPage={postsPerPage}
// 				totalPosts={posts.length}
// 				paginate={paginate}
// 			/>
// 		</div>
// 	);
// };

//Pagination

const Pagination = ({ paginate, pageNumbers }) => {
	return (
		<nav className='pagination-container'>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li key={number} className='page-item'>
						<a
							onClick={evt => {
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
