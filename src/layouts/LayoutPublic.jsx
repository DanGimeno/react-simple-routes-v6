import { Outlet } from 'react-router-dom';

const LayoutPublic = () => {
	return (
		<div className="container">
			<Outlet />

			<footer>
				<h5>Este es el footer</h5>
			</footer>
		</div>
	);
};
export default LayoutPublic;
