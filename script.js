let firstNumber = 0;
let secondNumber = 0;
let operator = prompt("What");


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