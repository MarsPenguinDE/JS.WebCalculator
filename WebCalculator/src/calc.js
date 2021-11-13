const getDisplay = document.getElementById('display'); 
var operators = ['+ ', '- ', '* ', '/ ']
var special = ['.','%']

function calculateResult() {
    getDisplay.innerHTML = eval(getDisplay.innerHTML);
}

function appendOperator(operator) {
    if(getDisplay.innerHTML == '') {
        alert("Next input must be a number!");
    }
    else if(operators.includes(getDisplay.innerHTML.slice(getDisplay.innerHTML.length - 2))) {
        alert('Next input must be a number!');
    }
    else if(special.includes(getDisplay.innerHTML.slice(getDisplay.innerHTML.length - 1))) {
        alert("Next input must be a number!");
    }else{
        document.getElementById('display').innerHTML += operator;
    }
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