import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/probs">Browse</Link></li>
					<li><Link to="/rand">Random</Link></li>
					<li><Link to="/stats">Stats</Link></li>
				</ul>
			</nav>

			<Outlet />
		</div>
		);
}

export default Layout;