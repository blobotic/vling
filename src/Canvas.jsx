import * as React from "react";
import {fabric, EraserBrush} from "fabric";
import useDetectClickOut from "./useDetectClickOut";
import ToolbarModal from "./ToolbarModal";


function Canvas() {
	let [canvas, setCanvas] = React.useState();
	let [clientHeight, setClientHeight] = React.useState(0)
	// let [otherlangsMD, setOtherlangsMD] = React.useState({})
	let [currentTool, setCurrentTool] = React.useState("PEN")
	let [toolOptions, setToolOptions] = React.useState({"PEN": {width: 5, color: "#ff32ee", brush: null}, "ERAS": {width: 15, brush: null}, "HIGH": {width: 20, color: {r: 251, g: 247, b: 25}, brush: null}})
	// let [openPenSettings, setOpenPenSettings] = React.useState(false);
	// let [openErasSettings, setOpenErasSettings] = React.useState(false);
	// let [openHighSettings, setOpenHighSettings] = React.useState(false);
	let [curOpenSettings, setCurOpenSettings] = React.useState("");
	// let [penColor, setPenColor] = React.useState("#aabbcc")
	// let [highColor, setHighColor] = React.useState("rgba(251,247,25,0.5)")
	let [curColor, setCurColor] = React.useState(toolOptions[currentTool]["color"])
	let [curWid, setCurWid] = React.useState(toolOptions[currentTool]["width"])
	let [freedrawDisabled, setFreedrawDisabled] = React.useState(true)


	const {show, nodeRef, triggerRef} = useDetectClickOut(false, setCurOpenSettings);
	const {show: show2, nodeRef: nodeRef2, triggerRef: triggerRef2} = useDetectClickOut(false, setCurOpenSettings);
	const {show: show3, nodeRef: nodeRef3, triggerRef: triggerRef3} = useDetectClickOut(false, setCurOpenSettings);

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
						let tmp2 = toolOptions[key][tmpKeys[i]]
						if (tmpKeys[i] == "color") {
							let tmp3 =(tmp2[0] == "#") ? tmp2 : "rgba(" + tmp2["r"] + ", " + tmp2["g"] + ", " + tmp2["b"] + ", 0.5)";
							tmp1[key]["brush"][tmpKeys[i]] = tmp3 
						}
						else tmp1[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]];
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
			canvas.freeDrawingBrush = toolOptions[currentTool]["brush"]
			setCurColor(toolOptions[currentTool]["color"])
			setCurWid(toolOptions[currentTool]["width"])
			console.log("useefect currenttool", toolOptions[currentTool])
		}
	}, [currentTool])

	React.useEffect(() => {
		if (toolOptions[currentTool]["brush"] && currentTool != "ERAS") {
			const tmp2 = {...toolOptions[currentTool], color: curColor} // (curColor[0] == "#") ? curColor : 
			// "rgba(" + curColor["r"] + "," + curColor["g"] + "," + curColor["b"] + ",0.5)"}
		const tmp1 = {...toolOptions}
		tmp1[currentTool] = tmp2
		setToolOptions(tmp1)

		console.log(curColor)
	}
	}, [curColor])

	React.useEffect(() => {
		if (toolOptions[currentTool]["brush"]) {
			const tmp2 = {...toolOptions[currentTool], width: curWid}
		const tmp1 = {...toolOptions}
		tmp1[currentTool] = tmp2
		setToolOptions(tmp1)
	}
	}, [curWid])

	// React.useEffect(() => {
	// 	if (toolOptions["HIGH"]["brush"]) {
	// 		const tmp2 = {...toolOptions["HIGH"], color: "rgba(" + highColor["r"] + "," + highColor["g"] + "," + highColor["b"] + ",0.5)"}
	// 		setToolOptions({...toolOptions, HIGH: tmp2})
	// 	}
	// }, [highColor])

	React.useEffect(() => {
		if (toolOptions["PEN"]["brush"]) {
			// console.log("???")
			let tmpKeys = ["width", "color"]


			for (let key in toolOptions) {
				if (toolOptions.hasOwnProperty(key)) {
					for (let i =0; i < tmpKeys.length; i++) {
						if (toolOptions[key][tmpKeys[i]]) {
						
						let tmp2 = toolOptions[key][tmpKeys[i]]
						if (tmpKeys[i] == "color") {
							let tmp3 =(tmp2[0] == "#") ? tmp2 : "rgba(" + tmp2["r"] + ", " + tmp2["g"] + ", " + tmp2["b"] + ", 0.5)";
							toolOptions[key]["brush"][tmpKeys[i]] = tmp3 
						}
						else toolOptions[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]];



							// toolOptions[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]]
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



	function tmpFunc(s) {
		if (freedrawDisabled) {
			setFreedrawDisabled(false)
			document.getElementsByClassName('canvas-container')[0].style.pointerEvents = 'auto'
			canvas.selection = true

			if (currentTool != s) {
				setCurrentTool(s)
			}
			setCurOpenSettings("")
			return
		}

		if (currentTool == s) {
			if (curOpenSettings != s) {
				setCurOpenSettings(s);
			}
			else setCurOpenSettings("")
		}
		else {
			setCurrentTool(s);
			setCurOpenSettings("");
		}


	}

	function disableCanvas() {
		setFreedrawDisabled(true)
		document.getElementsByClassName('canvas-container')[0].style.pointerEvents = "none";
		canvas.selection = false;
	}


	return (
		<div>
		<canvas id="over" style={{overflow: "auto", position: "absolute"}}></canvas>
		{/*<button onClick={addTriangle} style={{float: 'right'}}>click</button>*/}

		<div className="toolbar">
		
		{/* pointer to disable events */}
		<button className={(freedrawDisabled) ? "toolButton active" : "toolButton"} onClick={disableCanvas}><img src="/pointer.svg" /></button>

		{/* pen tool */}
		<div ref={triggerRef}><button className={(currentTool == "PEN" && !freedrawDisabled) ? "toolButton active" : "toolButton"} onClick={() => tmpFunc("PEN")}/*{() =>*/
			// (currentTool == "PEN") 
			// 	? (curOpenSettings != "PEN") ? setCurOpenSettings("PEN") : setCurOpenSettings("")
			// 	: setCurrentTool('PEN') && setCurOpenSettings("")}
			><img src="/pen.svg"/></button></div>
		{/* pen settings/menu */}
		{/*{openPenSettings ? <HexColorPicker color={penColor} onChange={setPenColor} /> : null}*/}
			{/*{ openPenSettings ? <ToolbarModal /> : null}*/}
		{show && curOpenSettings == "PEN" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef} />}

		{/* eraser tool */}
		<div ref={triggerRef3}><button className={(currentTool == "ERAS" && !freedrawDisabled) ? "toolButton active" : "toolButton"} onClick={() => tmpFunc("ERAS")}
		// {() => setCurrentTool('ERAS')}
			><img src="/eraser.svg"/></button></div>
		{show3 && curOpenSettings == "ERAS" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef3} />}
		

		{/* highlighter tool */}
		<div ref={triggerRef2}><button className={(currentTool == "HIGH" && !freedrawDisabled) ? "toolButton active" : "toolButton"} onClick={() => tmpFunc("HIGH")}/*() =>*/ 
		// (currentTool == "HIGH") 
			// ? (curOpenSettings != "HIGH") ? setCurOpenSettings("HIGH") : setCurOpenSettings("") 
			// : setCurrentTool('HIGH')}
			><img src="/highlighter.svg"/></button></div>
		{/*{openHighSettings ? <RgbColorPicker color={highColor} onChange={setHighColor} /> : null}*/}
		{show2 && curOpenSettings == "HIGH" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef2} />}



		</div>
		</div>
)
}

export default Canvas;