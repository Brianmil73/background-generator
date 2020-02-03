var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ "," 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function randomValue() {
	// code to ensure correct hex values are generated, i.e. leading zero for < 16
	var randomNum = [];
	for (var i = 0; i < 3; i++) {
		randomNum[i] = Math.floor(Math.random() * 256);
		if(randomNum[i] < 16) {
			randomNum[i] = "0" + randomNum[i].toString(16);
		} else {
			randomNum[i] = randomNum[i].toString(16);
		}
	}
	// return full hex color value
	return "#" + randomNum[0] + randomNum[1] + randomNum[2];
}

// set default body background to colors specified in HTML.
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// generate two random hex color values and apply to body background
randomButton.onclick = function() {
	var color1Hex = randomValue();
	var color2Hex = randomValue();
	color1.value = color1Hex;
	color2.value = color2Hex;
	setGradient();
}
