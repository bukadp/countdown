const submitDate = document.querySelector('.submit');
submitDate.addEventListener("click", calcTimeToDate);


window.onload = function setminAttributeInputeDate() {
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const tomorrowDate = date+1;
const monthToString = month.toString().length > 1 ? month.toString() : `0${month.toString()}`;
const minAttribute = `${year}-${monthToString}-${tomorrowDate}`;

document.getElementById("select_date").setAttribute("min", minAttribute)
}



function calcTimeToDate() {
    const startTime = Date.now();
    const inputDate = document.querySelector('input[type="date"]').value;
    let msinputDate = Date.parse(inputDate);
    let differenceInMs = msinputDate - startTime;
    const hours = Math.floor( (differenceInMs/(1000*60*60)) % 24 );
    const days = Math.floor( differenceInMs/(1000*60*60*24) % 365 );
    const years = Math.floor( differenceInMs/(1000*60*60*24*30*12));
    rendering(hours, days, years);
}

function rendering(hours, days, years) {
    let outputText = document.querySelector('.output_text');
    outputText.innerHTML = `Left ${years} years ${days} days ${hours-2} hours`;
}

