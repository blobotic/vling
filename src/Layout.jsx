import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useIsFocused } from '@react-navigation/native';



function Layout() {
	let navigate = useNavigate();
	// let history = useHistory();

	const [value, setValue] = useState(0);


	const randRouteChange = () => {
		var data = require("./problem_index.json");

		let comp = data.random(), 
			yr = comp["yrs"].random(), 
			ps = yr["ps"].random();

		let path = "/"+comp["name"].toLowerCase()+"/"+yr["yr"]+"/"+ps.toLowerCase();
		
		console.log(path)
		// React.useEffect(() => {
		// 	useNavigate(path);
		// })
		navigate("../../"+path, {replace: true});
		// reload page (to refresh component)
		// reference:
		// https://stackoverflow.com/questions/46820682/how-do-i-reload-a-page-with-react-router
		navigate(0);

		// history.push(path)
	}

	// const isFocused = useIsFocused();
	// useEffect(()=>{}, [isFocused]);

	return (
		<div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/probs">Browse</Link></li>
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