const display = document.getElementById("display");
let currentExpression = "";

function appendNumber(number) {
    currentExpression += number;
    display.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    display.value = currentExpression;
}

function appendDot() {
    if (!currentExpression.includes(".")) {
        currentExpression += ".";
        display.value = currentExpression;
    }
}

function clear() {
    currentExpression = "";
    display.value = "";
}

function calculate() {
    try {
        const result = eval(currentExpression);
        display.value = result;
        currentExpression = result; // Store result for further operations
    } catch (error) {
        display.value = "Error";
        currentExpression = "";
    }
}
