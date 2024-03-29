import React, { useState , useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./Layout.css"
// import * as data from "./problem_index.json";

var data = require("./problem_index.json");


function Layout() {
	let navigate = useNavigate();
	// let history = useHistory();

	const [value, setValue] = useState(0);


	function randRouteChange() {

		let comp = data.random(), 
			yr = comp["yrs"].random(), 
			ps = yr["ps"].random();

		let path = "../../"+comp["name"].toLowerCase()+"/"+yr["yr"]+"/"+ps.toLowerCase();
		
		console.log(path)
		// React.useEffect(() => {
		// 	useNavigate(path);
		// })
		navigate(path, {replace: true});
		// reload page (to refresh component)
		// reference:
		// https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router
		navigate(0);

		// history.push(path)
		// return path;
	}

	function randRouteChange2() {
		let comp = data.random(),
			yr = comp["yrs"].random(),
			ps = yr["ps"].random();
		return "/" + comp["name"].toLowerCase() + "/" + yr["yr"] + "/" + ps.toLowerCase();
	}


	return (
		<div>
			<nav className="navbar">
				<ul>
					<li><Link className="onLink" to="/">Home</Link></li>
					<li><Link to="/probs">Browse</Link></li>
					{/*<li><Link to={randRouteChange2()}>Random</Link></li>*/}
					{/*<li><Link to="../../../aplo/2020/3">Random</Link></li>*/}
					<li><a onClick={randRouteChange}>Random</a></li>
					<li><Link to="/stats">Stats</Link></li>
					<li><Link to="/search">Search</Link></li>
				</ul>
			</nav>

			<Outlet />
		</div>
		);
}

export default Layout;