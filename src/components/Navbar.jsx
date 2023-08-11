import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navbar navbar-dark bg-dark">
			<div className="container">
				<NavLink className="btn btn-outline-success" to="/">
					Inicio
				</NavLink>
				<NavLink className="btn btn-outline-success" to="/contacto">
					Contacto
				</NavLink>
				<NavLink className="btn btn-outline-success" to="/blog">
					Blog
				</NavLink>
			</div>
		</div>
	);
};
export default NavBar;
