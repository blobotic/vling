import "./StarRating.css"
// reference: https://codepen.io/hesguru/pen/BaybqXv

import * as  React from "react";

function StarRating({label, idpre, setprop, av}) {
	function handleChange(e) {
		// console.log(e.target)
		setprop(e.target.name, e.target.value);
	}

	React.useLayoutEffect(() => {
		if (av) {
			let el = document.getElementById(idpre+"star"+av);
			if (el) {
				el.checked = true;
			}
		}
	})

	return (
		<div className="starrating">
			<label>{label}</label>
		<div class="rate">
			    <input type="radio" id={idpre+"star5"} value="5" name={idpre} onClick={handleChange} />
			    <label for={idpre+"star5"} title="text">5 stars</label>
			    <input type="radio" id={idpre+"star4"} value="4" name={idpre} onClick={handleChange} />
			    <label for={idpre+"star4"} title="text">4 stars</label>
			    <input type="radio" id={idpre+"star3"} value="3" name={idpre} onClick={handleChange} />
			    <label for={idpre+"star3"} title="text">3 stars</label>
			    <input type="radio" id={idpre+"star2"} value="2" name={idpre} onClick={handleChange} />
			    <label for={idpre+"star2"} title="text">2 stars</label>
			    <input type="radio" id={idpre+"star1"} value="1" name={idpre} onClick={handleChange} />
			    <label for={idpre+"star1"} title="text">1 star</label>
  			</div>
  		</div>
  	)

}

export default StarRating;