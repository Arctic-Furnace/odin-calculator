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

console.log("1 + 2 = " + add(1,2));
console.log("10 - 2 = " + subtract(10,2));
console.log("5 * 2 = " + multiply(5,2));
console.log("9 / 3 = " + divide(9,3));

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

let numberArray = [0];
let numberOne;
let numberTwo;
let operator = "";
let displayValue = document.getElementById("result");
let result;

function updateDisplay(){
    if(numberArray.length === 0){
        document.getElementById("result").innerHTML = 0;
    }
    else{
        document.getElementById("result").innerHTML = numberArray.slice(-13).join('');
    }
    
    console.log("Number array is:" + numberArray.join(''));
}

document.getElementById("period")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(!numberArray.includes('.'))
            {
                numberArray.push('.');
            }
            
            updateDisplay();
});

document.getElementById("clear")
        .addEventListener("click", () => { 

            numberArray.splice(0,numberArray.length);
            operator = "";
            updateDisplay();
});

document.getElementById("zero")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
                numberArray.push(0);
                updateDisplay();
});

document.getElementById("one")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(1);
            updateDisplay();
});

document.getElementById("two")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(2);
            updateDisplay();
});

document.getElementById("three")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(3);
            updateDisplay();
});

document.getElementById("four")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(4);
            updateDisplay();
});

document.getElementById("five")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(5);
            updateDisplay();
});

document.getElementById("six")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(6);
            updateDisplay();
});

document.getElementById("seven")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(7);
            updateDisplay();
});

document.getElementById("eight")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(8);
            updateDisplay();
});

document.getElementById("nine")
        .addEventListener("click", () => { 
            if(operator === "="){
                numberArray.splice(0,numberArray.length);
                operator = "";
            }
            if(numberArray[0] === 0 && numberArray.length === 1){
                numberArray.splice(0,numberArray.length);
            }
            numberArray.push(9);
            updateDisplay();
});

document.getElementById("plus")
        .addEventListener("click", () => { 
            if(numberArray.length !== 0)
                {
                    numberOne = numberArray.join('');
                    updateDisplay();
                    numberArray.splice(0,numberArray.length);
                    operator = "+";
                }
});

document.getElementById("minus")
        .addEventListener("click", () => { 
            if(numberArray.length !== 0)
                {
                    numberOne = numberArray.join('');
                    updateDisplay();
                    numberArray.splice(0,numberArray.length);
                    operator = "-";
                }
});

document.getElementById("multiply")
        .addEventListener("click", () => { 
            if(numberArray.length !== 0)
                {
                    numberOne = numberArray.join('');
                    updateDisplay();
                    numberArray.splice(0,numberArray.length);
                    operator = "*";
                }
});

document.getElementById("divide")
        .addEventListener("click", () => { 
            if(numberArray.length !== 0)
                {
                    numberOne = numberArray.join('');
                    updateDisplay();
                    numberArray.splice(0,numberArray.length);
                    operator = "/";
                }
});

document.getElementById("equals")
        .addEventListener("click", () => { 
            if(operator !== "" && operator !== "="  )
            {
                numberTwo = numberArray.join('');

                numberArray.splice(0,numberArray.length);
                numberArray.push(operate(numberOne,numberTwo,operator));
                    
                updateDisplay();
                operator = "=";
                console.log("Operator is " + operator);
            }
});