Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function Rand() {
	var data = require("./problem_index.json");

	let comp = data.random(), yr = comp["yrs"].random(), ps = yr["ps"].random();
	// data.random()["yrs"].random()["ps"].random();

	return (
		<div class="home">
			<h1 class="center">random problem!!</h1>
			<p>wip page haha :)</p>
		</div>
	);
}

export default Rand;