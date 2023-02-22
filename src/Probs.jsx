function Probs() {
	var data = require("./problem_index.json");

	return (
		<div className="home">
			<h1 className="center">Problems</h1>
			
			{data.map(comp => (
				<div>
					<h2>{comp["name"]}</h2>
					<a href={comp["site"]}>Reference</a>

					{comp["yrs"].map(yr => (
						<div>
							<b>{yr["yr"]}: </b>
							{yr["ps"].map(prob => (
								<a className="probButton" href={"./"+comp["name"].toLowerCase()+"/"+yr["yr"]+"/"+prob.toLowerCase()}>{prob}</a> 
							))}
						</div>
					))}
				</div>
			))}
		</div>
		)
}

export default Probs;