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
    calculatorText.textContent = calculatorText.textContent + ' +';
})

let minusKey = document.getElementById('minusKey');

minusKey.addEventListener("click", function() {
    calculatorText.textContent = calculatorText.textContent + ' -';
})

let multiplyKey = document.getElementById('multiplyKey');

multiplyKey.addEventListener("click", function() {
    calculatorText.textContent = calculatorText.textContent + ' x';
})

let divideKey = document.getElementById('divideKey');

divideKey.addEventListener("click", function() {
    calculatorText.textContent = calculatorText.textContent + ' ÷';
})
let oneKey = document.getElementById('oneKey');



oneKey.addEventListener("click", function() {

    if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 1';
    } else {
        calculatorText.textContent += '1';
        firstNumber += calculatorText.textContent;
    }
    
})

let twoKey = document.getElementById('twoKey');

twoKey.addEventListener("click", function() {
 if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 2';
    } else {
        calculatorText.textContent += '2';
    }
    
})


let threeKey = document.getElementById('threeKey');

threeKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 3';
    } else {
        calculatorText.textContent += '3';
    }
    
})

let fourKey = document.getElementById('fourKey');


fourKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 4';
    } else {
        calculatorText.textContent += '4';
    }
    
})

let fiveKey = document.getElementById('fiveKey');

fiveKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 5';
    } else {
        calculatorText.textContent += '5';
    }
    
})

let sixKey = document.getElementById('sixKey');

sixKey.addEventListener("click", function() {
 if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 6';
    } else {
        calculatorText.textContent += '6';
    }
    
})




let sevenKey = document.getElementById('sevenKey');

sevenKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 7';
    } else {
        calculatorText.textContent += '7';
    }
    
})

let eightKey = document.getElementById('eightKey');

eightKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 8';
    } else {
        calculatorText.textContent += '8';
    }
    
})
let nineKey = document.getElementById('nineKey');

nineKey.addEventListener("click", function() {
if (calculatorText.textContent.toString().slice(-1) == '+' || 
    calculatorText.textContent.toString().slice(-1) == '-' || 
    calculatorText.textContent.toString().slice(-1) == 'x' || 
    calculatorText.textContent.toString().slice(-1) == '÷') {
        calculatorText.textContent += ' 9';
    } else {
        calculatorText.textContent += '9';
    }
    
})