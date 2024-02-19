// your code here
// ?name=naman&year=2020
const url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const btn = document.getElementById("button");
let urlFormate = url.textContent;

const updateUrl = (e) => {
	// e.preventDefault();
	if(name.value==="" && year.value===""){
		urlFormate = url.textContent;
	} else if(name.value !=="" && year.value !==""){
		urlFormate += `?name=${name.value}&year=${year.value}`;
	} else if(name.value !== "" && year.value===""){
		urlFormate += `?name=${name.value};
	} else if(name.value ==="" && year.value !==""){
		urlFormate += `?year=${year.value}`;
	} 
}


btn.addEventListener('click', updateUrl);
