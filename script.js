// your code here
// ?name=naman&year=2020
const url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const btn = document.getElementById("button");
let urlFormate = `https://localhost:8080/`;

const updateUrl = (e) => {
	e.preventDefault();
	
	// if(name.value && year.value){
	// 	urlFormate = `https://localhost:8080/?name=${name.value}&year=${year.value}`;
	// } else if(name.value){
	// 	urlFormate = `https://localhost:8080/?name=${name.value}`;

	// } else if(year.value ){
	// 	urlFormate = `https://localhost:8080/?year=${year.value}`;

	// }
	// else {
	// 	urlFormate = `https://localhost:8080/`;
	// }

	switch (true) {
		case name.value && year.value :
			urlFormate = `https://localhost:8080/?name=${name.value}&year=${year.value}`;
			break;
		case name.value : 
			urlFormate = `https://localhost:8080/?name=${name.value}`;
			break;
		case year.value : 
			urlFormate = `https://localhost:8080/?year=${year.value}`;
			break;
		default:
			urlFormate = `https://localhost:8080/`;
	}

	url.textContent = urlFormate;
	name.value = "";
	year.value = "";
}

url.textContent = `https://localhost:8080/`;

btn.addEventListener('click', updateUrl);

