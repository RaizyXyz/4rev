document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    display.innerText = 'Ako nalang kasi';
}
