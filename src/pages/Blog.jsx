import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const { data, loading, error } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Ha ocurrido un error: {error}</p>;

	const handleChange = (e) => {
		let filter = e.target.value;

		if (filter) {
			setSearchParams({ filter });
		} else {
			setSearchParams({});
		}
	};
	return (
		<>
			<h1>Blog</h1>
			<input
				type="text"
				name=""
				onChange={handleChange}
				value={searchParams.get('filter') || ''}
				className="form-control my-3"
			></input>
			<ul className="list-group">
				{data
					.filter((item) => {
						let filter = searchParams.get('filter');
						if (!filter) return true;
						let name = item.title.toLowerCase();
						return name.startsWith(filter.toLowerCase());
					})
					.map((item) => (
						<Link
							to={`/blog/${item.id}`}
							className="list-group-item"
							key={item.id}
						>
							{item.title}
						</Link>
					))}
			</ul>
		</>
	);
};
export default Blog;
