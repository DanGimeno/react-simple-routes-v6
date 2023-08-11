import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1>404</h1>
			<Link to="/" class="btn btn-danger">
				Volver al inicio
			</Link>
		</>
	);
};
export default NotFound;
