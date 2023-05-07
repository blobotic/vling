import * as React from "react";
import {fabric, EraserBrush} from "fabric";
import useDetectClickOut from "./useDetectClickOut";
import ToolbarModal from "./ToolbarModal";




function Canvas() {
	let [canvas, setCanvas] = React.useState();
	let [clientHeight, setClientHeight] = React.useState(0)

	let [currentTool, setCurrentTool] = React.useState("PEN")
	let [toolOptions, setToolOptions] = React.useState({
		"PEN": {width: 5, color: "#ff32ee", brush: null}, 
		"ERAS": {width: 15, brush: null}, 
		"HIGH": {width: 20, color: {r: 251, g: 247, b: 25}, brush: null}, 
		"TEXT": {width: 30, color: "#000" }, 
	})

	let [nonfdTool, setNonfdTool] = React.useState(false)
	let [nonfdToolName, setNonfdToolName] = React.useState("TEXT")

	let [curOpenSettings, setCurOpenSettings] = React.useState("");
	let [curColor, setCurColor] = React.useState(toolOptions[currentTool]["color"])
	let [curWid, setCurWid] = React.useState(toolOptions[currentTool]["width"])
	let [freedrawDisabled, setFreedrawDisabled] = React.useState(false)
	let [canvasDisabled, setCanvasDisabled] = React.useState(true)


	const {show, nodeRef, triggerRef} = useDetectClickOut(false, setCurOpenSettings);
	const {show: show2, nodeRef: nodeRef2, triggerRef: triggerRef2} = useDetectClickOut(false, setCurOpenSettings);
	const {show: show3, nodeRef: nodeRef3, triggerRef: triggerRef3} = useDetectClickOut(false, setCurOpenSettings);


	let freedrawTools = ["PEN", "ERAS", "HIGH"]
	let nonfdTools = ["TEXT"]

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
			if (toolOptions.hasOwnProperty(key) && freedrawTools.includes(key) ) {
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
		}
	}, [currentTool])

	React.useEffect(() => {
		if (toolOptions[currentTool]["brush"] && currentTool != "ERAS") {
			const tmp2 = {...toolOptions[currentTool], color: curColor}
			const tmp1 = {...toolOptions}
			tmp1[currentTool] = tmp2
			setToolOptions(tmp1)
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



	React.useEffect(() => {
		if (toolOptions["PEN"]["brush"]) {
			// console.log("???")
			let tmpKeys = ["width", "color"]


			for (let key in toolOptions) {
				if (toolOptions.hasOwnProperty(key) && key != "TEXT") {
					for (let i =0; i < tmpKeys.length; i++) {
						if (toolOptions[key][tmpKeys[i]]) {
						
						let tmp2 = toolOptions[key][tmpKeys[i]]
						if (tmpKeys[i] == "color") {
							let tmp3 =(tmp2[0] == "#") ? tmp2 : "rgba(" + tmp2["r"] + ", " + tmp2["g"] + ", " + tmp2["b"] + ", 0.5)";
							toolOptions[key]["brush"][tmpKeys[i]] = tmp3 
						}
						else toolOptions[key]["brush"][tmpKeys[i]] = toolOptions[key][tmpKeys[i]];
						}
					}
				}
			}
		}
	}, [toolOptions])


	// text
	function handlespecial(e) {
		if (e.target.tagName == "IMG") return;

		let tmp = false

		setNonfdTool(nonfdTool => {
			setNonfdToolName(nonfdToolName => {
					if (nonfdTool) {
						if (nonfdToolName == "TEXT") {
							tmp = true
						}
					}
				return nonfdToolName;
			})
			return false;
			// workaround because react hooks don't work well in callbacks
			// https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
		})

		setCanvas(canvas => {
			if (tmp) {
				let text = new fabric.IText('', {
					fontFamily: '-apple-system', 
					left: e.offsetX, 
					top: e.offsetY,
					fontSize: toolOptions["TEXT"].width,
					fill: toolOptions["TEXT"].color,
					fontWeight: 'normal'
				})
				canvas.add(text).setActiveObject(text);
				text.enterEditing();
				setFreedrawDisabled(true)
			}
			return canvas
		})
		// we put this separate because apparently it gets called once per setState() it's nested in...? not sure lol
	}

	// delete objects
	function deleteObject() {
		let activeObjects = canvas.getActiveObjects();
		for (let i in activeObjects) {
			canvas.remove(activeObjects[i]);
		}
		canvas.renderAll()
	}


	React.useLayoutEffect(() => {
		window.addEventListener("mousedown", handlespecial);
	}, [])


	// keybinds

	const C_KEYS = ['67', 'c'], M_KEYS = ['77', 'm'], B_KEYS = ['66', 'b', '80', 'p'], E_KEYS = ['69', 'e'], H_KEYS = ['72', 'h'], T_KEYS = ['84', 't'], DEL_KEYS = ['68', 'd', '46', 'Delete', '8', 'Backspace'];
	function handler(event) {
		if (event.target.tagName == "TEXTAREA") return;

		if (C_KEYS.includes(String(event.key))) {
			disableCanvas()
		}
		else if (M_KEYS.includes(String(event.key))) {
			disableFreedraw()
		}
		else if (B_KEYS.includes(String(event.key))) {
			tmpFunc("PEN")
		}
		else if (E_KEYS.includes(String(event.key))) {
			tmpFunc("ERAS")
		}
		else if (H_KEYS.includes(String(event.key))) {
			tmpFunc("HIGH")
		}
		else if (T_KEYS.includes(String(event.key))) {
			tmpFunc2("TEXT")
		}
		else if (DEL_KEYS.includes(String(event.key))) {
			deleteObject()
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



	function tmpFunc(s, a) {
		setFreedrawDisabled(false)
		setCanvasDisabled(false)

		if (currentTool == s && !nonfdTool && !canvasDisabled && !freedrawDisabled ) {
			if (curOpenSettings != s) {
				setCurOpenSettings(s);
			}
			else setCurOpenSettings("")
		}
		else {
			setCurrentTool(s);
			setCurOpenSettings("");
		}

		setNonfdTool(false)

		// disableCanvas()
		document.getElementsByClassName('canvas-container')[0].style.pointerEvents = 'auto'
		canvas.selection = true
		canvas.isDrawingMode = true
	}

	function tmpFunc2(s) {
		setNonfdTool(true)

		// if (canvasDisabled || freedrawDisabled) {
			setCanvasDisabled(false)
			setFreedrawDisabled(false)

			document.getElementsByClassName('canvas-container')[0].style.pointerEvents = 'auto'
			canvas.selection = true
			canvas.isDrawingMode = false
		// }

		setNonfdToolName(s)

	// 	canvas.add(new fabric.IText('heyy', {fontFamily: 'arial black', left: 100, top: 100}))
	}

	function disableCanvas() {
		setCanvasDisabled(true)
		setFreedrawDisabled(false)
		setNonfdTool(false)
		canvas.isDrawingMode = true
		canvas.selection = false;
		document.getElementsByClassName('canvas-container')[0].style.pointerEvents = "none";
	}

	function disableFreedraw() {
		setFreedrawDisabled(true)
		setCanvasDisabled(false)
		setNonfdTool(false)
		canvas.isDrawingMode = false;
		document.getElementsByClassName('canvas-container')[0].style.pointerEvents = "auto";		
		canvas.selection = true;
	}

	return (
		<div>
		<canvas id="over" style={{overflow: "auto", position: "absolute"}}></canvas>

		<div className="toolbar">
		
		{/* pointer to disable events */}
		<button className={(canvasDisabled && !freedrawDisabled && !nonfdTool) ? "toolButton active" : "toolButton"} onClick={disableCanvas}><img src="/pointer.svg" /></button>

		{/* move tool to disable freedraw */}
		<button className={(freedrawDisabled && !canvasDisabled && !nonfdTool) ? "toolButton active" : "toolButton"} onClick={disableFreedraw}><img src="/move.png"/></button>

		{/* pen tool */}
		<div ref={triggerRef}><button 
			className={(currentTool == "PEN" && !canvasDisabled && !freedrawDisabled && !nonfdTool) ? "toolButton active" : "toolButton"} 
			onClick={() => tmpFunc("PEN")}><img src="/pen.svg"/></button></div>
		{/* pen settings/menu */}
		{show && curOpenSettings == "PEN" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef} />}

		{/* eraser tool */}
		<div ref={triggerRef3}><button 
			className={(currentTool == "ERAS" && !canvasDisabled && !freedrawDisabled && !nonfdTool) ? "toolButton active" : "toolButton"} 
			onClick={() => tmpFunc("ERAS")}
			><img src="/eraser.svg"/></button></div>
		{show3 && curOpenSettings == "ERAS" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef3} />}
		

		{/* highlighter tool */}
		<div ref={triggerRef2}><button 
			className={(currentTool == "HIGH" && !canvasDisabled && !freedrawDisabled && !nonfdTool) ? "toolButton active" : "toolButton"} 
			onClick={() => tmpFunc("HIGH")}
			><img src="/highlighter.svg"/></button></div>
		{show2 && curOpenSettings == "HIGH" && <ToolbarModal name={currentTool} col={curColor} setCol={setCurColor} wid={curWid} setWid={setCurWid} ref={nodeRef2} />}


		{/* text tool */}
		<div><button className={(nonfdTool && nonfdToolName == "TEXT" && !freedrawDisabled && !canvasDisabled) ? "toolButton active" : "toolButton"} onClick={() => tmpFunc2("TEXT")}><img src="/text.png"/></button></div>


		{/* delete active selected */}
		<button className="toolButton" onClick={deleteObject}><img src="/trash.svg"/></button>

		</div>
		</div>
)
}

export default Canvas;