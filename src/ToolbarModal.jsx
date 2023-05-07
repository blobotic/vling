import React from "react"
import {HexColorPicker, RgbColorPicker} from "react-colorful"
import {Slider} from "rsuite"
// import 'rsuite/dist/rsuite.css';
import "./Slider.css"


// from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}

function hexToRgbObj(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return {r: (c>>16)&255, g: (c>>8)&255, b: c&255};
    }
    throw new Error('Bad Hex');
}


const ToolbarModal = React.forwardRef((props, ref) => {
	// console.log("toolbar modal")
	// console.log(props)

	// https://lospec.com/palette-list/sweetie-16
	let sweetie16Palette = ["#1a1c2c", "#5d275d", "#b13e53", "#ef7d57", 
		"#ffcd75", "#a7f070", "#38b764", "#257179", 
		"#29366f", "#3b5dc9", "#41a6f6", "#73eff7", 
		"#f4f4f4", "#94b0c2", "#566c86", "#333c57"
	] 

	return (
		<div className="toolbarModal" ref={ref}>
			<div className="tmtitle">{props.name} settings</div>
			{(props.name == "PEN") 
				? <HexColorPicker color={props.col} onChange={props.setCol} /> 
			: (props.name == "HIGH")
				? <RgbColorPicker color={props.col} onChange={props.setCol} /> : null}


			{/* default color palette*/}
    		{(props.col) ? <div className="tmfield" style={{textAlign: "center", lineHeight: "0.85"}}>
	    		{sweetie16Palette.map(function(item, i) {return <div 
	    			onClick={() => props.setCol((props.name == "HIGH") ? hexToRgbObj(item) : item)}
	    			style={{backgroundColor: item, width: "26px", height: "26px", display: "inline-block", margin: "0", padding: "0"}} />})}
    		</div> : null}


    		{(props.wid) 
    		? <div className="tmfield">Width: {props.wid} 
    			<Slider progress onChange={props.setWid} max={50} defaultValue={props.wid} 
    				style={{ width: 110, display: "inline-block", marginLeft: "1em" }} />
    		</div>
    		: null}


		</div>)
});

export default ToolbarModal;