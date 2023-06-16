import * as React from "react";
import 'katex/dist/katex.min.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkMath from 'remark-math';
import rehypeRaw from "rehype-raw";
import rehypeKatex from 'rehype-katex';

import MatchingAnswerBox from "./MatchingAnswerBox";
import Answerbox from "./Answerbox";
import ExplBox from "./ExplBox";

function extractMetaData(text) {
    let metaData = {};

    const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m);
    // get metadata
    const rawMetaData = metaRegExp.exec(text);

    let keyValues;

    if (rawMetaData) {
      // rawMeta[1] is the stuff between "---"
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


const MatchBox = ({num, start, alpha=false, cl}) => {
	return <MatchingAnswerBox num={num} start={start} alpha={alpha} className={cl}/>
}

function df() {
	return;
}

function ProblemText({comp, year, problem, metaData={}, setMetadata=df, setProblemNexists=df, otherlangs={"en": ""}, setOtherlangs=df, currentLang="en", top=false}) {
	let [readable, setReadable] = React.useState({md: ""});


	React.useLayoutEffect(() => {
		// Reference: https://stackoverflow.com/questions/71039926/how-to-import-md-file-when-i-use-create-react-app-with-javascript
		// let path = "../"+comp+"/"+year+"/"+problem+".md";
		let post;
		// let temp = false, hasSol = true;
		try { 
			post = require(`./problems/${comp}/${year}/${problem}.md`);
	  	} catch(e) {
	  		setProblemNexists(true);
	  	}


		let langs = ["fr"]

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

		//  other languages!!!
		for (let i = 0; i < langs.length; i++) {
			try {
				let posti = require(`./problems/${comp}/${year}/${problem}-${langs[i]}.md`);

				fetch(posti).then((res)=>res.text()).then((md)=>{otherlangs[langs[i]] = md})
			} catch(e) {}
		}

	}, []);




	// LANGUAGES AGAIN!!
	// we're doing um something?
	
	// add english to thing
	otherlangs["en"] = readable.md
	setOtherlangs(otherlangs)
	// console.log(Object.entries(otherlangs))

	return 	(
		<div>
			{top && <h1 className="center">{comp.toUpperCase()} {year} {problem.toUpperCase()}: {metaData.title}</h1>}

			<ReactMarkdown 
				children={otherlangs[currentLang]} 
				components={{'expl': ExplBox, 'ans': Answerbox, 'match': MatchBox}}
				remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, remarkMath]} 
				rehypePlugins={[rehypeRaw, rehypeKatex]} 
				className="lmargin2 rmargin2"
			/>
		</div>
	)
}

export default ProblemText;