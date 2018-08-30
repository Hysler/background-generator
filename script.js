var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.body;
var randomButton = document.getElementById("rand");

function getRandomHex()
{
	return "#" + Math.random(0,1000).toString(16).slice(2,8).toUpperCase();
}

function changeBackgroundColor()
{
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

function randomColorPicker()
{
	color1.value = getRandomHex();
	color2.value = getRandomHex();
	changeBackgroundColor();
}

window.onLoad = changeBackgroundColor();

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);

randomButton.addEventListener("click", randomColorPicker);