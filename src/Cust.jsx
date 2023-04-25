import * as  React from "react";
import { useParams, Outlet, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkMath from 'remark-math';
import rehypeRaw from "rehype-raw";
import rehypeKatex from 'rehype-katex';
import { visit } from "unist-util-visit";
import Answerbox from "./Answerbox";
import ExplBox from "./ExplBox";
import MatchingAnswerBox from "./MatchingAnswerBox";
import Probs from "./Probs";
import SolText from "./SolText";

import customMD from "./custom_md_guide.md"

import 'katex/dist/katex.min.css'


const MatchBox = ({num, start, alpha=false, cl}) => {
	return <MatchingAnswerBox num={num} start={start} alpha={alpha} className={cl}/>
}

function Cust() {
	let [md, setMD] = React.useState("")

	fetch(customMD).then(response => response.text()).then((text) => {
		setMD(text)
	})

	return (
		<div className="home">
		<ReactMarkdown 
			children={md}
			components={{'sol': SolText, 'expl': ExplBox, 'ans': Answerbox, 'match': MatchBox}}
			remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
			rehypePlugins={[rehypeRaw, rehypeKatex]}
		/>
		</div>
	)
}

export default Cust;