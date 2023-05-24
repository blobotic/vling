// https://codesandbox.io/s/tooltip-image-popup-lvcei?file=/src/index.js:227-271

import React from "react"
import {Outlet, Link} from "react-router-dom"
import {debounce} from "debounce"
import "./Preview.css"
import Home from "./Home.jsx"
import ErrorPage from "./ErrorPage.jsx"
import ProblemText from "./ProblemText"

let data = require("./problem_index.json");

function Preview({to, children}) {
	const [isShown, setIsShown] = React.useState(false);
	const [md, setMd] = React.useState({})



	// https://stackoverflow.com/questions/50466734/delay-react-onmouseover-event
	const debouncedHandleMouseEnter = debounce(() => setIsShown(true), 400)
	const handleOnMouseLeave = () => {
		setIsShown(false);
		debouncedHandleMouseEnter.clear()
		setMd({})
	}

	const handleRenderComponent = (to) => {
		if (to.includes("home")) return <Home />

		let splitTo = to.split("/")

		let compRes = data.find(obj => { return obj.name.toLowerCase()==splitTo[1].toLowerCase()})
		if (compRes) {
			let yrRes = compRes["yrs"].find(obj => {return obj.yr == splitTo[2]});
			if (yrRes && yrRes["ps"].indexOf(splitTo[3].toUpperCase()) > -1) {
				return <div><ProblemText comp={splitTo[1]} year={splitTo[2]} problem={splitTo[3]} metaData={md} setMetadata={setMd} top={true}/></div>
			} 
		}


		return <ErrorPage />
	}


	return (
		// <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
		<div onMouseLeave={handleOnMouseLeave} style={{position: "relative", display: "inline-block"}}>
			<Link onMouseEnter={debouncedHandleMouseEnter} to={to}>{children}</Link>
			{isShown && 
				<div className={md.title ? "card" : "displaynone"}>
					{handleRenderComponent(to)}
				</div>}
		</div>
	)
}

export default Preview;