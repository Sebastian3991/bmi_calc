// gauge basic configuration
let opts = {
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

// get documents from html gender + submit data
let genderForm = document.getElementById('genderform');
let genderbtns = genderForm.gender;
const submitbtn = document.getElementById('submit');
//set gender to male , same as checkbox when site is first opened
let gender = "male";
//get user data when submit button is pressed

submitbtn.addEventListener('onclick', e=> {
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;
let age = document.getElementById('age').value;



//call calculate
calculate(height, weight, age);
}); 

//mobile touch
submitbtn.addEventListener('touchstart', e=> {
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;
let age = document.getElementById('age').value;
//call calculate
calculate(height, weight, age);
}); 


//change gender dependion on user input
for(let i=0; i<genderbtns.length; i++) {
  genderbtns[i].addEventListener('change', (e)=> {
    gender = e.target.value;
    })
}


//calculate bmi
function calculate(height, weight, age) {
	
  //calculated bmi saved inside finalrounded
  let xheight = height /100;
  let fheight = xheight*xheight;
  let final = weight/fheight;
  let finalrounded = Math.round(final*10)/10;

  //check if bmi is okay number
    //call gauge function to build gauge and display final result
    if(gender === "male") {
      if(age >=19 && age <=24) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =20;
            opts.staticZones[3].min =20;
            opts.staticZones[3].max =25;
            opts.staticZones[4].min =25;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=25 && age <=34) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =21;
            opts.staticZones[3].min =21;
            opts.staticZones[3].max =26;
            opts.staticZones[4].min =26;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=35 && age <=44) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =22;
            opts.staticZones[3].min =22;
            opts.staticZones[3].max =27;
            opts.staticZones[4].min =27;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is  " + finalrounded;
      }
      else if(age >=45 && age <=54) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =23;
            opts.staticZones[3].min =23;
            opts.staticZones[3].max =28;
            opts.staticZones[4].min =28;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      } 
      else if(age >=55 && age <=64) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =24;
            opts.staticZones[3].min =24;
            opts.staticZones[3].max =29;
            opts.staticZones[4].min =29;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=65) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =25;
            opts.staticZones[3].min =25;
            opts.staticZones[3].max =29;
            opts.staticZones[4].min =29;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }

   }else if(gender === "female") {
      if(age >=19 && age <=24) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =19;
            opts.staticZones[3].min =19;
            opts.staticZones[3].max =24;
            opts.staticZones[4].min =24.
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=25 && age <=34) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =20;
            opts.staticZones[3].min =20;
            opts.staticZones[3].max =25;
            opts.staticZones[4].min =25;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=35 && age <=44) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =21;
            opts.staticZones[3].min =21;
            opts.staticZones[3].max =26;
            opts.staticZones[4].min =26;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=45 && age <=54) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =22;
            opts.staticZones[3].min =22;
            opts.staticZones[3].max =27;
            opts.staticZones[4].min =27;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=55 && age <=64) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =23;
            opts.staticZones[3].min =23;
            opts.staticZones[3].max =28;
            opts.staticZones[4].min =28;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
      else if(age >=65) {
            opts.staticZones[0].min =12;
            opts.staticZones[0].max =16;
            opts.staticZones[1].min =16;
            opts.staticZones[1].max =17.5;
            opts.staticZones[2].min =17.5;
            opts.staticZones[2].max =24;
            opts.staticZones[3].min =24;
            opts.staticZones[3].max =29;
            opts.staticZones[4].min =29;
            opts.staticZones[4].max =30;
            opts.staticZones[5].min =30;
            opts.staticZones[5].max =40;
            document.getElementById('output').innerHTML = "your bmi is " + finalrounded;
      }
   } else {
        document.getElementById('output').innerHTML = "make sure to file an age over 18";
   }
  gauge.set(finalrounded);
}

