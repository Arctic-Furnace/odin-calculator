let numberArray = [0];
let numberOne;
let numberTwo;
let operator = "";
let displayValue = document.getElementById("result");
let result;


//Main math functions
function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    return +a / +b;
}

function operate(numberOne,numberTwo,operator){
    if(operator === "+")
    {
        return add(numberOne,numberTwo);
    }
    else if(operator === "-")
    {
        return subtract(numberOne,numberTwo);
    }
    else if(operator === "*")
    {
        return multiply(numberOne,numberTwo);
    }
    else if(operator === "/")
    {
        if (numberTwo == 0 )
        {
            return "Error";
        }
        else{
            return divide(numberOne,numberTwo);
        }
    }
}

//Display values on the calculator screen

function updateDisplay(){
    if(numberArray.length === 0){
        displayValue.innerHTML = 0;
    }
    else{
        displayValue.innerHTML = numberArray.slice(-13).join('');
    }
    
    console.log("Number array is:" + numberArray.join(''));
}

function clearNumberArray(){
    numberArray.splice(0,numberArray.length);
}

function checkForEquals(){
    if(operator === "="){
        clearNumberArray();
        operator = "";
    }
}

function checkForZero(){
    if (numberArray[0] === 0 && numberArray.length === 1) {
        clearNumberArray();
    }
}

function getOperator(operatorButton) {
    if (numberArray.length !== 0) {
        numberOne = numberArray.join('');
        updateDisplay();
        clearNumberArray();
        operator = operatorButton;
    }
}

//Button functions

document.getElementById("period")
        .addEventListener("click", () => { 
            checkForEquals();
            if(!numberArray.includes('.'))
            {
                numberArray.push('.');
            }   
            updateDisplay();
});

document.getElementById("clear")
        .addEventListener("click", () => { 

            clearNumberArray();
            operator = "";
            updateDisplay();
});

document.getElementById("zero")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(0);
            updateDisplay();
});

document.getElementById("one")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(1);
            updateDisplay();
});

document.getElementById("two")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(2);
            updateDisplay();
});

document.getElementById("three")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(3);
            updateDisplay();
});

document.getElementById("four")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(4);
            updateDisplay();
});

document.getElementById("five")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(5);
            updateDisplay();
});

document.getElementById("six")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(6);
            updateDisplay();
});

document.getElementById("seven")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(7);
            updateDisplay();
});

document.getElementById("eight")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(8);
            updateDisplay();
});

document.getElementById("nine")
        .addEventListener("click", () => { 
            checkForEquals();
            checkForZero();
            numberArray.push(9);
            updateDisplay();
});

document.getElementById("plus")
        .addEventListener("click", () => { 
            getOperator("+");
});

document.getElementById("minus")
        .addEventListener("click", () => { 
            getOperator("-");
});

document.getElementById("multiply")
        .addEventListener("click", () => { 
            getOperator("*");
});

document.getElementById("divide")
        .addEventListener("click", () => { 
            getOperator("/");
});

document.getElementById("sign")
        .addEventListener("click", () => { 
            if(numberArray.length !== 0)
                {
                    if(numberArray[0]!='-')
                        numberArray.unshift('-');
                    else
                        numberArray.shift();
                    updateDisplay();
                    operator = "+/-";
                }
});

document.getElementById("equals")
        .addEventListener("click", () => { 
            if(operator !== "" && operator !== "="  )
            {
                numberTwo = numberArray.join('');

                clearNumberArray();
                numberArray.push(operate(numberOne,numberTwo,operator));
                    
                updateDisplay();
                operator = "=";
            }
});




