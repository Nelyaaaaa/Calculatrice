const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let string = '';


function evaluateExpression() {
    string = String(eval(string.replace('÷', '/').replace('×', '*')));
    display.value = string;
}

function removeLastCharacter() {
    string = string.substring(0, string.length - 1);
    display.value = string;
}

function clearDisplay() {
    string = '';
    display.value = string;
}

function appendToDisplay(text) {
    if (['+', '-'].includes(text)) {
        string += ` ${text} `;
    } else {
        string += text;
    }
    display.value = string;
}

function togglePlusMinus() {
    if (string !== '') {
        string = String(-eval(string));
    } else {
        string = '';
    }
    display.value = string;
}

function handleClick(e) {
    const buttonText = e.target.innerText;

    if (buttonText === '=') {
        evaluateExpression();
    } else if (buttonText === 'CE') {
        removeLastCharacter();
    } else if (buttonText === 'C') {
        clearDisplay();
    } else if (buttonText === '÷' || buttonText === '×') {
        appendToDisplay(` ${buttonText} `);
    } else if (e.target.id === 'plusMinus') {
        togglePlusMinus();
    } else {
        appendToDisplay(buttonText);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
