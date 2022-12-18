const selects = document.querySelectorAll('.currency');
const convert = document.getElementById('convert');
const input = document.getElementById('input');
const output = document.getElementById('output');
const api = "https://api.frankfurter.app/currencies";

fetch(api).then((data) => data.json()).then((data) => {
    
    // Display the data
    for (const select of selects) {

        Object.entries(data).forEach(element => {
            select.innerHTML += `<option value="${element[0]}">${element[0]}</option>`;
        });
    }
});

convert.addEventListener('click', () => {

    const from = selects[0].value;
    const to = selects[1].value;
    const amount = input.value;

    try {
        if (amount == '') {
            throw new Error('Please enter a valid amount');
        } else if (from == to) {
            throw new Error('Please select different currencies');
        }
    } catch (error) {    
        if (error.message == 'Please enter a valid amount') {
            input.focus();
        }
        alert(error);
        return;
    }

    const api = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

    fetch(api).then((data) => data.json()).then((data) => {
        output.value = data.rates[to];
    });
});