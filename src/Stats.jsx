import * as React from "react";

function changeSetting(settingName, setting) {
	let localData = JSON.parse(localStorage.getItem('settings')) || {};
	localData[settingName] = !setting;
	localStorage.setItem('settings', JSON.stringify(localData));
}

function Stats() {
	let [showSol, setShowSol] = React.useState(() => {
		const localData = JSON.parse(localStorage.getItem('settings'));
		return localData["showSol"] || false;
	}
			// JSON.parse(localStorage.getItem('settings')["showSol"]) || false
	);

	// let [showSol, setShowSol] = React.useState();
	console.log(showSol)


	return (
		<div className="home">
			<h1 className="center">Stats</h1>

			<p><b>Completed:</b> WIP</p>

			<h1 className="center">Settings</h1>
			<p><b>Show/hide answers by default:</b> <button onClick={() => {changeSetting("showSol", showSol); setShowSol(!showSol); }}>{showSol ? "Show answers (by default)" : "Hide answers (by default)"}</button></p>
			<p><b>/Random/ set:</b> <button>All / Incomplete only</button> </p>

			<h1>Note</h1>
			<p>This page is still WIP and as of 3/4/23, <b>none</b> only the show/hide answers function actually functions.</p>
			<p>For buttons, click to toggle through options.</p>
		</div>
	);
}

export default Stats;