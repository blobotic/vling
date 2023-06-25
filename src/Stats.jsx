import * as React from "react";

function changeSetting(settingName, setting) {
	console.log(settingName, setting)
	let localData = JSON.parse(localStorage.getItem('settings')) || {};
	localData[settingName] = setting;
	localStorage.setItem('settings', JSON.stringify(localData));
}

function Stats() {
	let [showSol, setShowSol] = React.useState(() => {
		const localData = JSON.parse(localStorage.getItem('settings'));
		return localData ? localData["showSol"] || false : false;
	});
	let [ratingBarPos, setRatingBarPos] = React.useState(() => {
		const localData = JSON.parse(localStorage.getItem('settings'));
		return localData ? localData["ratingBarPos"] || 0 : 0;
	})

	let [complCnt, setComplCnt] = React.useState(0);

	// let [showSol, setShowSol] = React.useState();
	// console.log(showSol)

	// page title
	React.useLayoutEffect(() => {
		document.title = "vling | Stats/settings"


		// get completed count under stats
		let problemSettings = JSON.parse(localStorage.getItem('problemSettings'));
		if (problemSettings) {
			// setComplCnt(0);
			let tmp = 0
			for (let comp in problemSettings) {
				for (let year in problemSettings[comp]) {
					for (let problem in problemSettings[comp][year]) {
						if (problemSettings[comp][year][problem]["complete"]) {
							// setComplCnt(complCnt+1);
							tmp += 1;
						}
					}
				}
			}

			setComplCnt(tmp);			
		}

	})


	return (
		<div className="home">
			<h1 className="center">Stats</h1>

			<p><b>Completed:</b> {complCnt}</p>

			<h1 className="center">Settings</h1>
			<p><b>Show/hide answers by default:</b> <button onClick={() => {changeSetting("showSol", !showSol); setShowSol(!showSol); }}>{showSol ? "Show answers (by default)" : "Hide answers (by default)"}</button></p>
			<p><b>Show rating bar at the bottom/top/nowhere: </b><button onClick={() => {changeSetting("ratingBarPos", (ratingBarPos+1)%3); setRatingBarPos((ratingBarPos+1)%3); }}>{ratingBarPos==0?"Bottom":ratingBarPos==1?"Top":"Nowhere"}</button></p>
			<p><b>/Random/ set: (WIP)</b> <button>All / Incomplete only</button> </p>


			<h1>Note</h1>
			<p>Click each button to toggle through the options.</p>
		</div>
	);
}

export default Stats;