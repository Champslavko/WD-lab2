let firstNumber = inputFirstNumber.val();
let secondNumber = inputSecondNumber.val();
let indexOfOperation = inputIndexOfOperation.val();
let result = 0;

function calculate(){
    if(indexOfOperation === "1"){
        result = parseInt(firstNumber) + parseInt(secondNumber);
    }else if(indexOfOperation === "2"){
        result = parseInt(firstNumber) - parseInt(secondNumber);
    }else if(indexOfOperation === "3"){
        result = parseInt(firstNumber) * parseInt(secondNumber);
    }else if(indexOfOperation === "4"){
        result = parseInt(firstNumber) / parseInt(secondNumber);
    }else if(indexOfOperation === "5"){
        result = parseInt(firstNumber) ** (1/parseInt(secondNumber));
    }else if(indexOfOperation === "6"){
        result = Math.pow(firstNumber, secondNumber);
    }else if(indexOfOperation === "7"){
        result = parseInt(firstNumber) * parseInt(secondNumber) / 100
    }
}