import * as React from "react";

function Home() {
	// page title
	React.useLayoutEffect(() => {
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