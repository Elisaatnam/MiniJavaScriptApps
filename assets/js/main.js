// .double-me
function multiply() {
	const output = document.querySelector(".output");

	let num = Number(document.querySelector(".num").value);
	console.log(num);

	output.innerHTML = num + " * 2 = " + num * 2;
}

// .birth-year
function calcAge() {
	const output = document.querySelector(".output2");

	let currentYear = new Date().getFullYear();

	let age = Number(document.querySelector(".dob").value);

	output.innerHTML = currentYear - age;
}

//.age-diff
function calcDiff() {
	const output = document.querySelector(".output3");

	let age1 = Number(document.querySelector("#age1").value);
	let age2 = Number(document.querySelector("#age2").value);

	output.innerHTML = "The difference is: " + (age1 - age2);
}

//.counter
const output = document.querySelector(".output4");
let counterState = 0;
output.innerHTML = counterState;

function cal(addSub) {
	counterState += addSub;
	output.innerHTML = counterState;
}

function multi() {
	counterState *= 2;
	output.innerHTML = counterState;
}

function reset() {
	counterState = 0;
	output.innerHTML = counterState;
}

//.change
const h2 = document.querySelector(".change-h2");

function change() {
	h2.classList.add("big");
}

function reset2() {
	h2.classList.remove("big");
}

//.rgb-generator
function changeBackground() {
	let r = Number(document.querySelector("#red").value);
	let g = Number(document.querySelector("#green").value);
	let b = Number(document.querySelector("#blue").value);

	//String Concatenation
	let bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
	console.log(bgColor);

	document.querySelector(".rgb-generator").style.backgroundColor = bgColor;

	let output = document.querySelector(".output5");
	output.innerHTML = "Here is your rgb code: " + bgColor;
}

//.aqi-check
const bg = document.querySelector(".aqi-check");
const aqiOutput = document.querySelector(".output6");
const concern = document.querySelector(".concern");
const effect = document.querySelector(".effect");

function checkAirQuality() {
	let aqi = document.querySelector("#range").value;
	aqiOutput.innerHTML = aqi;

	if (aqi <= 50) {
		bg.classList.add("green");
		bg.classList.remove("yellow", "orange");
		concern.innerHTML = "Level of health concern: Good";
		effect.innerHTML = "Level of health effect: Little or no risk";
	} else if (aqi > 50 && aqi <= 100) {
		bg.classList.add("yellow");
		bg.classList.remove("green", "orange");
		concern.innerHTML = "Level of health concern: Moderate";
		effect.innerHTML = "Level of health effect: Acceptable quality";
	} else {
		bg.classList.add("orange");
		bg.classList.remove("green", "yellow");
		concern.innerHTML =
			"Level of health concern: Unhealthy for sensitive groups";
		effect.innerHTML =
			"Level of health effect: Generable publics not likely affected";
	}
}
