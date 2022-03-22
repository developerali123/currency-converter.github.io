// for selecting different controls
var search = document.getElementById("input");
var convert = document.getElementById("convert");
var fromCurrecy = document.getElementById("currency1");
var toCurrecy = document.getElementById("currency2");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
	fetch("https://api.exchangerate-api.com/v4/latest/USD")
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

// display results after convertion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	let finalvalue=((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.innerHTML=`<h2>Converted amount: <span>${finalvalue}</span></h2>`;
}

// when user click on reset button
function clearVal() {
	window.location.reload();
	finalAmount.innerHTML = "";
};
