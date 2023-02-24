function Probs() {
	var data = require("./problem_index.json");

	return (
		<div className="home">
			<h1 className="center">Problems</h1>
			
			{data.map(comp => (
				<div>
					<h2>{comp["name"]}</h2>

					{comp["yrs"].map(yr => (
						<div>
							<b>{yr["yr"]}: </b>
							{yr["ps"].map(prob => (
								<a className="probButton" href={"../../../"+comp["name"].toLowerCase()+"/"+yr["yr"]+"/"+prob.toLowerCase()}>{prob}</a> 
							))}
						</div>
					))}

					<p />
					<a href={comp["site"]} target="_blank">Reference</a>
				</div>
			))}

			<h1>Notes</h1>
			<p><b>NACLO:</b> only 2022 J-R have been populated, without solutions</p>
			<p><b>IOL:</b> slowly updating w/ solutions</p>
			<p>Submit a pull request if you'd like to contribute!</p>

		</div>
		)
}

export default Probs;