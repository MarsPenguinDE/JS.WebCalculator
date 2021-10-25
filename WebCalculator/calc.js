function CE_Button() {
    document.getElementById('display').innerHTML = '';
}

function DEL_Button() {
    let getDisplayArea = document.getElementById('display');
    getDisplayArea = getDisplayArea.innerHTML.slice(0, -1);
    document.getElementById('display').innerHTML = getDisplayArea;
}

function appendOperator(operator) {
    document.getElementById('display').innerHTML += operator;
}

function drawNumber(number) {
    document.getElementById('display').innerHTML += number;
}

function calculateResult() {
    let getInvoice = document.getElementById('display');
    let result = eval(getInvoice.innerHTML);
    getInvoice.innerHTML = result;
}

function ExtendedButton() {
    let getButton = document.getElementById('fixed-extended-button')
    getButton.innerHTML = "Coming Soon!";
    getButton.style.background = "red";
    getButton.style.boxShadow = '4px 4px 4px red';
}
