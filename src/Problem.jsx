import * as  React from "react";
import { useParams, Outlet, Link, useNavigate } from "react-router-dom";
import { visit } from "unist-util-visit";
import Probs from "./Probs";
import "./Problem.css"
import Canvas from "./Canvas";

import StarRating from "./StarRating";

import ProblemText from "./ProblemText";
import SolutionText from "./SolutionText";


function Problem() {
	const { comp, year, problem } = useParams();

	let data = require("./problem_index.json");

	let [metaData, setMetadata] = React.useState({metadata: {}});
	let [otherlangs, setOtherlangs] = React.useState({})
	let [currentLang, setCurrentLang] = React.useState("en")
	let [problemNexists, setProblemNexists] = React.useState(false);
	let [hasSol, setHasSol] = React.useState(true);

	let [problemSettings, setProblemSettings] = React.useState(() => {
		let localData = JSON.parse(localStorage.getItem('problemSettings'));
		return localData || {};
	});

	React.useLayoutEffect(() => {

		// console.log(document.query)
		// let problemSettings = localStorage.getItem('problemSettings');
		// problemSettings[comp] = problemSettings[comp] || {};
		// problemSettings[comp][year] = problemSettings[comp][year] || {};
		// problemSettings[comp][year][problem] = problemSettings[comp][year][problem] || {};
		// problemSettings[comp][year][problem] = "test"
		console.log(problemSettings, "hiii")
		localStorage.setItem('problemSettings', JSON.stringify(problemSettings));
		// console.log(getProblemProperty("complete"))
		// if (!problemSettings) {

		// }

		// if (isComplete == "") {

		// }
	}, [problemSettings]);

	function setProblemProperty(property, value) {
		setProblemSettings(prevState => {
			let tmp = Object.assign({}, prevState);
			tmp[comp] = tmp[comp] || {};
			tmp[comp][year] = tmp[comp][year] || {};
			tmp[comp][year][problem] = tmp[comp][year][problem] || {};
			tmp[comp][year][problem][property] = value;
			return tmp;
		});
		// console.log("hmm")
		// setProblemSettings(tmp);
	}

	function getProblemProperty(property) {
		let tmp = problemSettings;
		tmp[comp] = tmp[comp] || {};
		tmp[comp][year] = tmp[comp][year] || {};
		tmp[comp][year][problem] = tmp[comp][year][problem] || {};
		return problemSettings[comp][year][problem][property] || false;
	}

	// this exists in Stats.jsx
	// reference:
	// https://stackoverflow.com/questions/60688411/assign-local-storage-to-react-state-react-hooks
	// https://stackoverflow.com/questions/49122280/react-native-onpress-how-can-i-toggle-the-button-text-and-function-call
	let [showSol, setShowSol] = React.useState(() => {
		const localData = JSON.parse(localStorage.getItem('settings'));
		return localData ? localData["showSol"] || false : false;
	});

	let [ratingBarPos, setRatingBarPos] = React.useState(() => {
		const localData = JSON.parse(localStorage.getItem('settings'));
		return localData ? localData["ratingBarPos"] || 0 : 0;
	})


	let navigate = useNavigate();

 
	// eventlistener
	// hotKEYS!!!
	// reference: 
	// https://stackoverflow.com/questions/29069639/listen-to-keypress-for-document-in-reactjs
	const LEFT_KEYS = ['37', 'ArrowLeft'], RIGHT_KEYS = ['39', 'ArrowRight'], ENTER_KEYS = ['13', 'Enter'], C_KEYS = ['67', 'c'];
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


	// set page title
	React.useLayoutEffect(() => {
		document.title = "vling | " + comp.toUpperCase() + " " + year + " " + problem.toUpperCase() + ": " + metaData.title
	}, [metaData])


	if (problemNexists) return <Probs />

	let result = data.find(obj => { return obj.name.toLowerCase()==comp.toLowerCase()})["yrs"].find(obj => {return obj.yr == year})["ps"];


	return (
		<div className="home">

		<Canvas />

		<h1 className="center">{comp.toUpperCase()} {year} {problem.toUpperCase()}: {metaData.title} ({metaData.points} points)</h1>
		
		<div className="languageBar">
			<a className={(problem == result[0].toLowerCase()) ? 'disabled linkbutton float-left' : 'linkbutton float-left'} href={(problem == result[0].toLowerCase()) ? "" : "/"+comp.toLowerCase() + "/" + year + "/" + result[result.findIndex(obj => {return problem ==obj.toLowerCase()})-1].toLowerCase()}>Previous</a>
			<a className={(problem == result[result.length-1].toLowerCase()) ? 'disabled linkbutton float-right' : 'linkbutton float-right'} href={(problem == result[result.length-1].toLowerCase()) ? "" : "/"+comp.toLowerCase()+"/" + year + "/" + result[result.findIndex(obj => {return obj.toLowerCase()==problem})+1].toLowerCase()}>Next </a>

			{/* language buttons !! */}
			<div style={{marginLeft: "6em"}}>
			{(Object.keys(otherlangs).length > 1) ? 
						Object.entries(otherlangs).map(([key, value]) => <button onClick={() => setCurrentLang(key)}>{key}</button>)
					 : false}
			</div>
		</div>

		{/* completed/rating: TOP */}
		{ ratingBarPos==1?
			<div className="rateBar">
				<button className={"completed-button " + (getProblemProperty("complete")?"blue-button":"red-button")} onClick={() => setProblemProperty("complete", !getProblemProperty("complete"))}>{getProblemProperty("complete")?"Complete":"Incomplete"}</button>
			
				<div className="break"></div>
				<StarRating label="Difficulty:" idpre="difficulty" setprop={setProblemProperty} av={getProblemProperty("difficulty")}/>
				<div className="break"></div>
				<StarRating label="Quality:" idpre="quality" setprop={setProblemProperty} av={getProblemProperty("quality")}/>
			</div>:false
		}

		{/*actual markdown O_O*/}

		{/* problem text */}
		<ProblemText comp={comp} year={year} problem={problem} metaData={metaData} setMetadata={setMetadata} setProblemNexists={setProblemNexists}
			otherlangs={otherlangs} setOtherlangs={setOtherlangs} currentLang={currentLang} />



		{/* show/hide solution button */}
		<div style={{marginBottom: '6em', marginLeft: '2em'}}><button disabled={!hasSol} onClick={() => setShowSol(!showSol)} type="button" style={{position: 'absolute'}}>{hasSol && showSol ? "Hide solution" : "Show solution"}</button></div>

		{/* solution: */}
		<SolutionText comp={comp} year={year} problem={problem} hasSol={hasSol} setHasSol={setHasSol} showSol={showSol}/>

		{/* completed/rating: BOTTOM */}
		{ ratingBarPos==0?
			<div className="rateBar">
				<button className={"completed-button " + (getProblemProperty("complete")?"blue-button":"red-button")} onClick={() => setProblemProperty("complete", !getProblemProperty("complete"))}>{getProblemProperty("complete")?"Complete":"Incomplete"}</button>
			
				<div className="break"></div>
				<StarRating label="Difficulty:" idpre="difficulty" setprop={setProblemProperty} av={getProblemProperty("difficulty")}/>
				<div className="break"></div>
				<StarRating label="Quality:" idpre="quality" setprop={setProblemProperty} av={getProblemProperty("quality")}/>
			</div>:false
		}
		

		</div>
	);
}

export default Problem;