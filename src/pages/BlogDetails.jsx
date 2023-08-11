import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const BlogDetails = () => {
	const params = useParams();

	const { data, error, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts/' + params.id
	);

	if (loading) return <p>Cargando Post...</p>;
	if (error) return <p>Ha ocurrido un error: {error}</p>;

	console.log(data);
	/*
	const { user, loadingUser, errorUser } = useFetch(
		`https://jsonplaceholder.typicode.com/users/${data.userId}`
	);

	if (loadingUser) return <p>Cargando User...</p>;
	if (errorUser) return <p>Ha ocurrido un errorUser: {errorUser}</p>;
*/
	return (
		<div className="container">
			<h1>{data.title}</h1>
			<article>{data.body}</article>
			<Link to="/blog" className="btn btn-outline-primary">
				Volver
			</Link>
		</div>
	);
};
export default BlogDetails;
