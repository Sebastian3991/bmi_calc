const submitbtn = document.getElementById('submit');

//get data from

submitbtn.addEventListener('click', e=> {
e.preventDefault();
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
console.log(calculate(height,weight));

}); 

function calculate(height, weight) {
	let xheight = height /100;
	let fheight = xheight*xheight;
	document.getElementById('output').innerHTML = weight/fheight;
}

