import * as React from "react";
import {useLocation} from "react-router-dom"

function Home() {
	// page title
	const location = useLocation();

	React.useLayoutEffect(() => {
		console.log(location)
		document.title = "vling"
	}, [])

	return (
		<div className="home center">
			<h1>vling</h1>
			<div className="typed-out-container">
				<div className="typed-out">for NACLO/IOL/ling comp practice</div>
			</div>
		</div>
		);
}

export default Home;