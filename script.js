let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
// Add event listener to the document to capture keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[\d\+\-\*/.=]|Enter|Backspace|Escape/.test(key)) {
        event.preventDefault(); // Prevent default browser actions for the pressed keys
        if (key === "Enter") {
            calculateResult(); // Calculate result on Enter key press
        } else if (key === "Backspace") {
            // Clear the display on Backspace key press
            clearDisplay();
        } else if (key === "Escape") {
            // Clear the display on Escape key press
            clearDisplay();
        } else {
            // Append the pressed key to the display
            appendToDisplay(key);
        }
    }
});
