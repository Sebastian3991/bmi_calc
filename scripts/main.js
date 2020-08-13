var opts = {
  angle: 0.001, // The span of the gauge arc
  lineWidth: 0.44, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6FADCF',   // Colors
  colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  staticZones: [
   {strokeStyle: "#F03E3E", min: 12, max: 16}, // Red from 100 to 130
   {strokeStyle: "#F3B607", min: 16, max: 17.5},
   {strokeStyle: "#FFDD00", min: 17.5, max: 18.5}, // Yellow
   {strokeStyle: "#30B32D", min: 18.5, max: 25}, // Green
   {strokeStyle: "#FFDD00", min: 25, max: 30}, // Yellow
   {strokeStyle: "#F03E3E", min: 30, max: 40}  // Red
],
};
var target = document.getElementById('scale'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
document.getElementById("preview-bmi").className = "preview-bmi";
gauge.setTextField(document.getElementById("preview-bmi"));
gauge.maxValue = 40; // set max gauge value
gauge.setMinValue(12);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(20);
 // set actual value

const submitbtn = document.getElementById('submit');

//get user data when submit button is pressed

submitbtn.addEventListener('click', e=> {
e.preventDefault();
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
calculate(height, weight);
}); 

function calculate(height, weight) {
	let xheight = height /100;
	let fheight = xheight*xheight;
	let final = weight/fheight;
	let finalrounded = Math.round(final*10)/10;
	if(finalrounded >=15 && finalrounded <= 35) {
		document.getElementById('output').innerHTML = "Your bmi is " + finalrounded;
		gauge.set(finalrounded);
	}else {
		document.getElementById('output').innerHTML = "Oops, something went wrong!";
	}
}

