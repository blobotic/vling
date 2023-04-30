import { Outlet, Link } from "react-router-dom";

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
			<p>If anyone has non-official contest problems written and would like me to add them here, please create a pull request or DM me!</p>

			<p>In the meantime, I'll slowly be adding existing NACLO, IOL, and APLO problems with solutions—solutions will likely come out at a <i>much</i> slower rate than problem statements.</p>

			<h3>Contributing</h3>
			<p><b>Adding questions:</b> All pull requests to add questions are welcome! The only guideline is to ensure that everything in the <i>original question statement/PDF</i> exists in the <code>.md</code> file you create; as long as it reasonably mimics the original and is readable, we will accept it.</p>
			<p><b>Adding solutions:</b> If you are adding a solution to a problem <i>without</i> a solution, create a file called <code>[problem]-sol.md</code> and write up your solution! Make sure to use the sol directive and ensure that everything in the <i>original answer key</i> is contained in your solution somewhere. If the problem already has a solution but you'd like to add a <i>different</i> solution, add a heading labeling each solution with the writer. If you'd like to update/expand on an existing solution, ensure that you are not deleting significant parts of it and submit a pull request!</p>
			<p>Custom markdown reference <Link to="../cust">here</Link>.</p>
			<p><b>Typos/issues/bugs/problems:</b> Please submit a pull request or DM me!</p>


			<h3>Search</h3>
			<p>Try "search everything" to search every problem's full text. Try "tags only" to search only through the problem name and my selected tags, which include for now the <i>language used</i>, <i>location</i>, and the <i>type of problem</i>.</p>
			<p>Tags for types of problems:</p>
			<ul>
				<li><b>script</b>, used for problems written in non-alphanumeric scripts</li>
				<li><b>tl</b>, used for problems that ask you to translate full sentences</li>
				<li><b>comp</b>, used for computational linguistics-related problems (mostly from NACLO)</li>
				<li><b>number</b>, used for problems that ask you to solve for a number system</li>
				<li><b>match</b>, used for problems that ask you to match phrases in another language and English, given two lists</li>
				<li><b>tenses</b>, used for problems that ask you to cross-reference given phrases and TLs to write phrases in different tenses/forms in the given language</li>
				<li><b>sound</b>, used for problems that ask you to examine sound/word changes in languages/over time</li>
				<li><b>family</b>, used for problems that involve familial terms/family trees</li>
			</ul>

		</div>
		)
}

export default Probs;