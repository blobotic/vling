import * as  React from "react";
import { useParams } from "react-router-dom";
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
import Probs from "./Probs";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import 'katex/dist/katex.min.css'

// import raw from "raw.macro";

function extractMetaData(text) {
    let metaData = {};

    const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m);
    // get metadata
    const rawMetaData = metaRegExp.exec(text);

    let keyValues;

    if (rawMetaData) {
      // rawMeta[1] are the stuff between "---"
      keyValues = rawMetaData[1].split("\n");

      // which returns a list of key values: ["key1: value", "key2: value"]
      keyValues.forEach((keyValue) => {
        // split each keyValue to keys and values
        if (keyValue.includes(":")) {
	        const [key, value] = keyValue.split(":");
	        metaData[key] = value.trim();
	    }

      });
    }
    return [rawMetaData, metaData];
}

// reference: https://github.com/remarkjs/react-markdown/issues/585
// function ReactMarkdownRemarkDirective() {
// 	return (tree) => {
// 		visit(
// 			tree,
// 			["leafDirective", "containerDirective"],
// 			(node) => {
// 				node.data = {
// 					hName: node.name,
// 					hProperties: node.attributes,
// 					...node.data
// 				};			

// 				return node;
// 			}
// 		);
// 	};
// }

// function MyDirective({ attributes, children }) {
// 	console.log(attributes);
// 	return (
// 		<Answerbox className="doSomethingCustom" {...attributes}>
// 			{children}
// 		</Answerbox>
// 	);
// }

const AnsBox = ({cl}) => {
	return <Answerbox className={cl}/>
}

const ExBox = ({cl}) => {
	return <ExplBox className={cl}/>
}

function Problem() {
	const { comp, year, problem } = useParams();

	let data = require("./problem_index.json");

	let [readable, setReadable] = React.useState({md: ""});
	let [solution, setSolution] = React.useState({md: ""});
	let [metaData, setMetadata] = React.useState({metadata: {}});
	let [showSol, setShowSol] = React.useState();

	let navigate = useNavigate();

	// TODO: 
	// check settings for value
	// let showSol = false;

	// Reference: https://stackoverflow.com/questions/71039926/how-to-import-md-file-when-i-use-create-react-app-with-javascript
		// let path = "../"+comp+"/"+year+"/"+problem+".md";
	let post, post2;
	let temp = false, hasSol = true;
	try { 
			post = require(`./${comp}/${year}/${problem}.md`);//"./naclo/2022/j.md");
  	} catch(e) {
  		// return <Home />
  		temp = true;
  	}

	try {
		post2 = require(`./${comp}/${year}/${problem}-sol.md`);
	} catch(e) {
		hasSol = false;
	}

	React.useLayoutEffect(() => {
    	fetch(post)
		      .then((res) => res.text())
		      .then((md) => { 
		      	// extract metadata
		      	const [rawMeta, metaData] = extractMetaData(md);
		      	setMetadata(metaData);
		      	md = md.replace(rawMeta[0], "");

		      	// set raw markdown
		      	setReadable({ md }); 
		      }
		);

		fetch(post2)
			.then((res) => res.text())
			.then((md) => {
				setSolution({md});
			})
	}, []);


	// eventlistener
	// hotKEYS!!!
	// reference: 
	// https://stackoverflow.com/questions/29069639/listen-to-keypress-for-document-in-reactjs
	const LEFT_KEYS = ['37', 'ArrowLeft'], RIGHT_KEYS = ['39', 'ArrowRight'], ENTER_KEYS = ['13', 'Enter'];
	function handler(event) {
		if (["input", "textarea"].includes(event.target.tagName.toLowerCase())) {
			return;
		}
		if (LEFT_KEYS.includes(String(event.key))) {
			// go to prev
			if (problem != result[0].toLowerCase()) {
				let path = "../../" + comp.toLowerCase() + "/" + year + "/" + result[result.findIndex(obj => {return obj.toLowerCase()==problem})-1].toLowerCase();
				// console.log(path)
				navigate(path, {replace: true});
				navigate(0);
			}
		}
		else if (RIGHT_KEYS.includes(String(event.key))) {
			if (problem != result[result.length-1].toLowerCase()) {
				let path = "../../" + comp.toLowerCase() + "/" + year + "/" + result[result.findIndex(obj => {return obj.toLowerCase()==problem})+1].toLowerCase();
				// console.log(path)
				navigate(path, {replace: true});
				navigate(0);
			}
			// go to next
		}
		else if (ENTER_KEYS.includes(String(event.key))) {
			// show solution
			console.log("enter")
			if (hasSol) {
			console.log(showSol)
				setShowSol(!showSol);
			}
		}
	}

	const savedHandler = React.useRef();
	React.useLayoutEffect(() => {
		savedHandler.current = handler;
	})
	React.useLayoutEffect(() => {
		const eventListener = event => savedHandler.current(event);
		window.addEventListener("keydown", eventListener);
		return () => { window.removeEventListener("keydown", eventListener);}
	}, ["keydown", window]);


	if (temp) return <Probs />


	let result = data.find(obj => { return obj.name.toLowerCase()==comp.toLowerCase()})["yrs"].find(obj => {return obj.yr == year})["ps"];

	// https://stackoverflow.com/questions/55456604/how-to-call-a-child-method-on-parent-events-with-react
	// const childRef = useRef();
	// const handleSubmit = (event) => {
	// 	// call the child function
	// 	childRef.current.checkAnswer(event);
	// }

	return (
		<div className="home">
		<h1 className="center">{comp.toUpperCase()} {year} {problem.toUpperCase()}: {metaData.title} ({metaData.points} points)</h1>
		
{/*answer validation: https://stackoverflow.com/questions/55456604/how-to-call-a-child-method-on-parent-events-with-react */}
		<a className={(problem == result[0].toLowerCase()) ? 'disabled linkbutton' : 'linkbutton'} href={(problem == result[0].toLowerCase()) ? "" : "/"+comp.toLowerCase() + "/" + year + "/" + result[result.findIndex(obj => {return problem ==obj.toLowerCase()})-1].toLowerCase()}>Previous</a>
		<a className={(problem == result[result.length-1].toLowerCase()) ? 'disabled linkbutton right' : 'linkbutton right'} href={(problem == result[result.length-1].toLowerCase()) ? "" : "/"+comp.toLowerCase()+"/" + year + "/" + result[result.findIndex(obj => {return obj.toLowerCase()==problem})+1].toLowerCase()}>Next </a>
{/*		<form onSubmit={handleSubmit}>
*/}		<ReactMarkdown 
			children={readable.md} 
			components={{'expl': ExBox, 'ans': AnsBox}}
			remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
			rehypePlugins={[rehypeRaw, rehypeKatex]} 
		/>

		{/*<input type="submit" />*/}
		{/*</form>*/}

		<button disabled={!hasSol} onClick={() => setShowSol(!showSol)} type="button">Show solution</button>

		{/* solution: */}
		{showSol ? <div className="solutionbox"><ReactMarkdown
			children={solution.md}
			// components = {{'sol': <span className="solText"></span>}}
			remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
			rehypePlugins={[rehypeRaw, rehypeKatex]} 		
		/></div> : null}


		{/*<a className={(hasSol ? 'linkbutton' : 'linkbutton disabled')} href="/">Show solution</a>*/}

		{/* Reference: https://www.w3schools.com/react/react_forms.asp */}
		</div>
	);
}

export default Problem;