import React from "react"
import {HexColorPicker, RgbColorPicker} from "react-colorful"
import {Slider} from "rsuite"
// import 'rsuite/dist/rsuite.css';
import "./Slider.css"

const ToolbarModal = React.forwardRef((props, ref) => {
	// console.log("toolbar modal")
	// console.log(props)
	return (
		<div className="toolbarModal" ref={ref}>
			<div className="tmtitle">{props.name} settings</div>
			{(props.name == "PEN") 
				? <HexColorPicker color={props.col} onChange={props.setCol} /> 
			: (props.name == "HIGH")
				? <RgbColorPicker color={props.col} onChange={props.setCol} /> : null}

			{/*{(props.wid) ? <Slider style={{width: 20}}/> : null}*/}
    		{(props.wid) 
    		? <div className="tmfield">Width: {props.wid} 
    			<Slider progress onChange={props.setWid} max={50} defaultValue={props.wid} 
    				style={{ width: 110, display: "inline-block", marginLeft: "1em" }} />
    		</div>
    		: null}

		</div>)
});

export default ToolbarModal;