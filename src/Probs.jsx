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
			<p>If anyone has non-official contest problems (NACLO/IOL) written and would like me to add them here, please create a pull request or DM me!</p>

			<p>In the meantime, I'll slowly be adding existing NACLO and IOL problems with solutions—solutions will likely come out at a <i>much</i> slower rate than problem statements.</p>

			<h3>Contributing</h3>
			<p><b>Adding questions:</b> All pull requests to add questions are welcome! The only guideline is to ensure that everything in the <i>original question statement/PDF</i> exists in the <code>.md</code> file you create; as long as it reasonably mimics the original and is readable, we will accept it.</p>
			<p><b>Adding solutions:</b> If you are adding a solution to a problem <i>without</i> a solution, create a file called <code>[problem]-sol.md</code> and write up your solution! Make sure to use the sol directive and ensure that everything in the <i>original answer key</i> is contained in your solution somewhere. If the problem already has a solution but you'd like to add a <i>different</i> solution, add a heading labeling each solution with the writer. If you'd like to update/expand on an existing solution, ensure that you are not deleting significant parts of it and submit a pull request!</p>
			<p><b>Typos/issues/bugs/problems:</b> Please submit a pull request or DM me!</p>


		</div>
		)
}

export default Probs;