document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let currentOperator = "";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.id;
            if (value === "clear") {
                currentInput = "";
                currentOperator = "";
                display.value = "0";
            } else if (value === "backspace") {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput || "0";
            } else if (value === "equals") {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } else {
                if (currentInput === "0" && !isNaN(value)) {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.value = currentInput;
            }
        });
    });
});