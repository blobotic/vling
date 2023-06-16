import React from "react"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkMath from 'remark-math';
import rehypeRaw from "rehype-raw";
import rehypeKatex from 'rehype-katex';

import SolText from "./SolText";

function SolutionText({comp, year, problem, hasSol, setHasSol, showSol}) {
	let [solution, setSolution] = React.useState({md: ""});

	React.useLayoutEffect(() => {
		let post2;

		try {
			post2 = require(`./problems/${comp}/${year}/${problem}-sol.md`);
		} catch(e) {
			setHasSol(false);
		}

		fetch(post2)
			.then((res) => res.text())
			.then((md) => {
				setSolution({md});
			})
	})

	return (
		<div>
			{hasSol && showSol ? <div className="solutionbox lmargin2 rmargin2"><ReactMarkdown
				children={solution.md}
				components = {{'sol': SolText}}
				remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
				rehypePlugins={[rehypeRaw, rehypeKatex]}
			/></div> : null}
		</div>
	)

}

export default SolutionText;