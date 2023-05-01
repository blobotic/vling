import * as React from "react";
import {fabric, EraserBrush} from "fabric";
import {HexColorPicker, RgbColorPicker} from "react-colorful"


function Canvas() {
	let [canvas, setCanvas] = React.useState();
	let [clientHeight, setClientHeight] = React.useState(0)
	// let [otherlangsMD, setOtherlangsMD] = React.useState({})
	let [currentTool, setCurrentTool] = React.useState("PEN")
	let [toolOptions, setToolOptions] = React.useState({"PEN": {width: 5, color: "#ff32ee", brush: null}, "ERAS": {width: 15, brush: null}, "HIGH": {width: 20, color: "rgba(251,247,25,0.5)", brush: null}})
	let [openPenSettings, setOpenPenSettings] = React.useState(false);
	let [openErasSettings, setOpenErasSettings] = React.useState(false);
	let [openHighSettings, setOpenHighSettings] = React.useState(false);
	let [penColor, setPenColor] = React.useState("#aabbcc")
	let [highColor, setHighColor] = React.useState("rgba(251,247,25,0.5)")


	// CANVAS - fabric js

	React.useEffect(() => {
		let canvas = new fabric.Canvas('over', {isDrawingMode: true});
		let el = document.getElementsByClassName('canvas-container')[0]
		el.style.pointerEvents = "none";
		canvas.selection = false
		setCanvas(canvas);

		// init brush
		let tmp1 = {"PEN": {...toolOptions["PEN"], brush: new fabric.PencilBrush(canvas)},
		"ERAS": {...toolOptions["ERAS"], brush: new fabric.EraserBrush(canvas)},
		"HIGH": {...toolOptions["HIGH"], brush: new fabric.PencilBrush(canvas)}}

		let tmpKeys = ["width", "color"]

		for (let key in toolOptions) {
			if (toolOptions.hasOwnProperty(key)) {
				for (let i =0; i < tmpKeys.length; i++) {
					if (toolOptions[key][tmpKeys[i]]) {
						tmp1[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]]
					}
				}
			}
		}

		canvas.freeDrawingBrush = tmp1[currentTool]["brush"]
		setToolOptions(tmp1)
	}, [])

	clientHeight = document.body.clientHeight;

	React.useEffect(() => {
		if (canvas != null) {
			canvas.setWidth(document.body.clientWidth * 0.9)
			canvas.setHeight(clientHeight)
			canvas.calcOffset()
		}
	}, [clientHeight])



	React.useEffect(() => {
		if (canvas != undefined) {
			console.log(currentTool)

			canvas.freeDrawingBrush = toolOptions[currentTool]["brush"]

			console.log(toolOptions[currentTool]["brush"])
		}
	}, [currentTool])

	React.useEffect(() => {
		if (toolOptions["PEN"]["brush"]) {
			const tmp2 = {...toolOptions["PEN"], color: penColor}
		const tmp1 = {...toolOptions, PEN: tmp2}
		setToolOptions(tmp1)
		console.log(tmp1)
		console.log("changed pen color...")
	}
	}, [penColor])

	React.useEffect(() => {
		if (toolOptions["HIGH"]["brush"]) {
			const tmp2 = {...toolOptions["HIGH"], color: "rgba(" + highColor["r"] + "," + highColor["g"] + "," + highColor["b"] + ",0.5)"}
			setToolOptions({...toolOptions, HIGH: tmp2})
		}
	}, [highColor])

	React.useEffect(() => {
		if (toolOptions["PEN"]["brush"]) {
			console.log("???")
			let tmpKeys = ["width", "color"]


			for (let key in toolOptions) {
				if (toolOptions.hasOwnProperty(key)) {
					for (let i =0; i < tmpKeys.length; i++) {
						if (toolOptions[key][tmpKeys[i]]) {
							toolOptions[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]]
						}
					}
				}
			}
		}
	}, [toolOptions])


	// keybinds

	const C_KEYS = ['67', 'c'];
	function handler(event) {
		// enable/disable canvas
		if (C_KEYS.includes(String(event.key))) {
			canvas.selection = !canvas.selection
			let el = document.getElementsByClassName('canvas-container')[0]
			el.style.pointerEvents = (canvas.selection) ? 'auto' : 'none';
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



	return (
		<div>
		<canvas id="over" style={{overflow: "auto", position: "absolute"}}></canvas>
		{/*<button onClick={addTriangle} style={{float: 'right'}}>click</button>*/}

		<div className="toolbar">
		
		{/* pen tool */}
		<button class={(currentTool == "PEN") ? "toolButton active" : "toolButton"} onClick={() => 
			(currentTool == "PEN") 
				? setOpenPenSettings(!openPenSettings)
				: setCurrentTool('PEN')}
			><img src="/pen.svg"/></button>
		{/* pen settings/menu */}
		{openPenSettings ? <HexColorPicker color={penColor} onChange={setPenColor} /> : null}

		{/* eraser tool */}
		<button class={(currentTool == "ERAS") ? "toolButton active" : "toolButton"} onClick={() => setCurrentTool('ERAS')}><img src="/eraser.svg"/></button>
		<button class={(currentTool == "HIGH") ? "toolButton active" : "toolButton"} onClick={() => 
		(currentTool == "HIGH") ? setOpenHighSettings(!openHighSettings) : setCurrentTool('HIGH')}><img src="/highlighter.svg"/></button>
		{openHighSettings ? <RgbColorPicker color={highColor} onChange={setHighColor} /> : null}

		</div>
		</div>
)
}

export default Canvas;