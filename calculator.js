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

let numberOne = [];
let numberTwo;
let operator;
let displayValue = document.getElementById("result");
let result;

function updateDisplay(){
    document.getElementById("result").innerHTML = numberOne.slice(-13).join('');
    console.log(numberOne.join(''));
}




document.getElementById("zero")
        .addEventListener("click", () => { 
            if(numberOne.length !== 0)
                {
                    numberOne.push(0);
                    updateDisplay();
                }
});

document.getElementById("one")
        .addEventListener("click", () => { 
            numberOne.push(1);
            updateDisplay();
});

document.getElementById("two")
        .addEventListener("click", () => { 
            numberOne.push(2);
            updateDisplay();
});

document.getElementById("three")
        .addEventListener("click", () => { 
            numberOne.push(3);
            updateDisplay();
});

document.getElementById("four")
        .addEventListener("click", () => { 
            numberOne.push(4);
            updateDisplay();
});

document.getElementById("five")
        .addEventListener("click", () => { 
            numberOne.push(5);
            updateDisplay();
});

document.getElementById("six")
        .addEventListener("click", () => { 
            numberOne.push(6);
            updateDisplay();
});

document.getElementById("seven")
        .addEventListener("click", () => { 
            numberOne.push(7);
            updateDisplay();
});

document.getElementById("eight")
        .addEventListener("click", () => { 
            numberOne.push(8);
            updateDisplay();
});

document.getElementById("nine")
        .addEventListener("click", () => { 
            numberOne.push(9);
            updateDisplay();
});