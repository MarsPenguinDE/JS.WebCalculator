const getDisplay = document.getElementById('display'); 

function calculateResult() {
    getDisplay.innerHTML = eval(getDisplay.innerHTML);
}

function appendOperator(operator) {
    document.getElementById('display').innerHTML += operator;
}

function drawNumber(number) {
    getDisplay.innerHTML += number;
}

function DEL_Button() {
    getDisplay.innerHTML = getDisplay.innerHTML.slice(0, -1);
}

function CE_Button() {
    getDisplay.innerHTML = '';
}