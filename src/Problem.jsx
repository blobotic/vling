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
	let [metaData, setMetadata] = React.useState({metadata: {}});

	// Reference: https://stackoverflow.com/questions/71039926/how-to-import-md-file-when-i-use-create-react-app-with-javascript
		let path = "../"+comp+"/"+year+"/"+problem+".md";
		let post;
		let temp = false;
		try { 
			post = require(`./${comp}/${year}/${problem}.md`);//"./naclo/2022/j.md");
  	} catch(e) {
  		// return <Home />
  		temp = true;
  	}
	React.useEffect(() => {
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
	}, []);

	if (temp) return <Probs />

	let result = data.find(obj => { return obj.name.toLowerCase()==comp.toLowerCase()})["yrs"].find(obj => {return obj.yr == year})["ps"];

	

	return (
		<div className="home">
		<h1 className="center">{comp.toUpperCase()} {year} {problem.toUpperCase()}: {metaData.title} ({metaData.points} points)</h1>
		
{/*answer validation: https://stackoverflow.com/questions/55456604/how-to-call-a-child-method-on-parent-events-with-react */}
		<a className={(problem == result[0].toLowerCase()) ? 'disabled linkbutton' : 'linkbutton'} href={(problem == result[0].toLowerCase()) ? "" : "/"+comp.toLowerCase() + "/" + year + "/" + result[result.findIndex(obj => {return problem ==obj.toLowerCase()})-1].toLowerCase()}>Previous</a>
		<a className={(problem == result[result.length-1].toLowerCase()) ? 'disabled linkbutton right' : 'linkbutton right'} href={(problem == result[result.length-1].toLowerCase()) ? "" : "/"+comp.toLowerCase()+"/" + year + "/" + result[result.findIndex(obj => {return obj.toLowerCase()==problem})+1].toLowerCase()}>Next </a>
		<form onSubmit={handleSubmit}>
		<ReactMarkdown 
			children={readable.md} 
			components={{'expl': ExBox, 'ans': AnsBox}}
			remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
			rehypePlugins={[rehypeRaw, rehypeKatex]} 
		/>

		<input type="submit" />
		</form>

		{/* Reference: https://www.w3schools.com/react/react_forms.asp */}
		</div>
	);
}

export default Problem;