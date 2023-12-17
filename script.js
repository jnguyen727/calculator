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
let answer = 0;

function add(firstNumber, secondNumber) {
   return parseFloat(firstNumber) + parseFloat(secondNumber);

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


let equalsKey = document.getElementById('equalsKey');



let plusKey = document.getElementById('plusKey');

plusKey.addEventListener("click", function() {
    if (calculatorText.textContent.toString().includes('-') ||
    calculatorText.textContent.toString().includes('+') ||
    calculatorText.textContent.toString().includes('x') ||
    calculatorText.textContent.toString().includes('÷')) {
        secondNumber = calculatorText.textContent.toString().substring(firstNumber.length + 3);
        calculatorText.textContent = calculatorText.textContent + ' +';

    } 

    else if (secondNumber == 0) {
        firstNumber = calculatorText.textContent;
        calculatorText.textContent = calculatorText.textContent + ' +';
        operator = 'add';

    }

    if (secondNumber != 0) {
        let calculatedValue = operate(firstNumber,secondNumber,operator);
       calculatorText.textContent = operate(firstNumber,secondNumber,operator);
       firstNumber = calculatedValue;
       secondNumber = 0;


       }

   
})

equalsKey.addEventListener('click', function() {
    secondNumber = calculatorText.textContent.toString().substring(firstNumber.length + 3);
    if (secondNumber != 0) {
        let calculatedValue = operate(firstNumber,secondNumber,operator);
        calculatorText.textContent = operate(firstNumber,secondNumber,operator);
        firstNumber = calculatedValue;
        secondNumber = 0;
    }

})

let minusKey = document.getElementById('minusKey');

minusKey.addEventListener("click", function() {
    if (calculatorText.textContent.toString().includes('-') ||
    calculatorText.textContent.toString().includes('+') ||
    calculatorText.textContent.toString().includes('x') ||
    calculatorText.textContent.toString().includes('÷')) {
        secondNumber = calculatorText.textContent.toString().substring(firstNumber.length + 3);
        calculatorText.textContent = calculatorText.textContent + ' -';

    } 

    else if (secondNumber == 0) {
        firstNumber = calculatorText.textContent;
        calculatorText.textContent = calculatorText.textContent + ' -';
        operator = 'subtract';

    }

    if (secondNumber != 0) {
        let calculatedValue = operate(firstNumber,secondNumber,operator);
       calculatorText.textContent = operate(firstNumber,secondNumber,operator);
       firstNumber = calculatedValue;
       secondNumber = 0;
    
       }
})

let multiplyKey = document.getElementById('multiplyKey');

multiplyKey.addEventListener("click", function() {
    if (calculatorText.textContent.toString().includes('-') ||
    calculatorText.textContent.toString().includes('+') ||
    calculatorText.textContent.toString().includes('x') ||
    calculatorText.textContent.toString().includes('÷')) {
        secondNumber = calculatorText.textContent.toString().substring(firstNumber.length + 3);
        calculatorText.textContent = calculatorText.textContent + ' x';

    } 

    else if (secondNumber == 0) {
        firstNumber = calculatorText.textContent;
        calculatorText.textContent = calculatorText.textContent + ' x';
        operator = 'multiply';

    }

    if (secondNumber != 0) {
        let calculatedValue = operate(firstNumber,secondNumber,operator);
       calculatorText.textContent = operate(firstNumber,secondNumber,operator);
       firstNumber = calculatedValue;
       secondNumber = 0;
    
       }
})

let divideKey = document.getElementById('divideKey');

divideKey.addEventListener("click", function() {
    if (calculatorText.textContent.toString().includes('-') ||
    calculatorText.textContent.toString().includes('+') ||
    calculatorText.textContent.toString().includes('x') ||
    calculatorText.textContent.toString().includes('÷')) {
        secondNumber = calculatorText.textContent.toString().substring(firstNumber.length + 3);
        calculatorText.textContent = calculatorText.textContent + ' ÷';

    } 

    else if (secondNumber == 0) {
        firstNumber = calculatorText.textContent;
        calculatorText.textContent = calculatorText.textContent + ' ÷';
        operator = 'divide';

    }

   if (secondNumber != 0) {
    let calculatedValue = operate(firstNumber,secondNumber,operator);
   calculatorText.textContent = operate(firstNumber,secondNumber,operator);
   firstNumber = calculatedValue;
   secondNumber = 0;

   }
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

