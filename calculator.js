function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
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
        return divide(numberOne,numberTwo);
    }
}

let numberOne;
let numberTwo;
let operator;