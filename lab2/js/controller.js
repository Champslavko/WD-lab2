inputFirstNumber.on("change", function(){
    firstNumber = inputFirstNumber.val();
    calculate();
    updateInputsOfCalc();
});
inputSecondNumber.on("change", function(){
    secondNumber = inputSecondNumber.val();
    calculate();
    updateInputsOfCalc();
});
inputIndexOfOperation.on("change", function(){
    indexOfOperation = inputIndexOfOperation.val();
    calculate();
    updateInputsOfCalc();
});
