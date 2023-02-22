import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Layout() {
	let navigate = useNavigate();

	const randRouteChange = () => {
		var data = require("./problem_index.json");

		let comp = data.random(), 
			yr = comp["yrs"].random(), 
			ps = yr["ps"].random();

		let path = "../../../"+comp["name"].toLowerCase()+"/"+yr["yr"]+"/"+ps.toLowerCase();
		
		console.log(path)
		navigate(path);
	}

	return (
		<div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/probs">Browse</Link></li>
					<li><a onClick={randRouteChange}>Random</a></li>
					<li><Link to="/stats">Stats</Link></li>
				</ul>
			</nav>

			<Outlet />
		</div>
		);
}

export default Layout;