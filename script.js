var inputValues = '';

var handlers = {
    createCalc: function() {

    },
    clearOutput: function() {
        inputValues = '';
        document.querySelector('.calculator-screen').innerText = '';
    },
    calculate: function() {
        inputValues = eval(inputValues);
        this.display();
    },
    backspace: function() {
        inputValues = inputValues.slice(0, inputValues.length - 1);
        console.log(inputValues);
        this.display();
    },
    display: function() {
        document.querySelector('.calculator-screen').innerText = inputValues;
    }
};

document.querySelector('.calculator-keys').addEventListener('click', function(e) {
    if (e.target.id == "number") {
        inputValues += (e.target.value);
        handlers.display();
    } else if (e.target.id == 'operator') {
        inputValues += (e.target.value)
        handlers.display();
    } else if (e.target.id == 'equals') {
        handlers.calculate();
    } else if (e.target.id == 'clear-button') {
        handlers.clearOutput();
    } else if (e.target.id == 'backspace') {
        handlers.backspace();
    }
    e.stopPropagation();
})

