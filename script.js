let firstNumber = 0;
let secondNumber = 0;
//let operator = prompt("What");

/*
switch (operator) {
    case '+':
        operator = 'add';
        break;
    case '-':
        operator = 'subtract';
        break;
    case '*':
        operator = 'multiply';
        break;
    case '/':
        operator = 'divide';
        break;
}
*/

function add(firstNumber, secondNumber) {
   return (firstNumber + secondNumber);

}

function subtract(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
}

function operate(firstNumber, secondNumber, operator) {


    if (operator == 'add') {
        return add(firstNumber, secondNumber)
    }

    else if (operator == 'subtract') {
        return subtract(firstNumber, secondNumber)
    }

    else if (operator == 'multiply') {
        return multiply(firstNumber, secondNumber)
    }

    else if (operator == 'divide') {
        return divide(firstNumber, secondNumber)
    }

}

let calculatorText = document.getElementById('calculatorResults');
let plusKey = document.getElementById('plusKey');

plusKey.addEventListener("click", function() {
    calculatorText.textContent = '+';
})
let oneKey = document.getElementById('oneKey');



oneKey.addEventListener("click", function() {
    calculatorText.textContent = '1';
})

let twoKey = document.getElementById('twoKey');

twoKey.addEventListener("click", function() {
    calculatorText.textContent = '2';
})
 


let threeKey = document.getElementById('threeKey');

threeKey.addEventListener("click", function() {
    calculatorText.textContent = '3';
})

let fourKey = document.getElementById('fourKey');


fourKey.addEventListener("click", function() {
    calculatorText.textContent = '4';
})

let fiveKey = document.getElementById('fiveKey');

fiveKey.addEventListener("click", function() {
    calculatorText.textContent = '5';
})

let sixKey = document.getElementById('sixKey');

sixKey.addEventListener("click", function() {
    calculatorText.textContent = '6';
})




let sevenKey = document.getElementById('sevenKey');

sevenKey.addEventListener("click", function() {
    calculatorText.textContent = '7';
})

let eightKey = document.getElementById('eightKey');

eightKey.addEventListener("click", function() {
    calculatorText.textContent = '8';
})

let nineKey = document.getElementById('nineKey');

nineKey.addEventListener("click", function() {
    calculatorText.textContent = '9';
})