js
document.getElementById('choice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const choice = document.querySelector('input[name="choice"]:checked');
    const resultDiv = document.getElementById('result');

    if (choice) {
        resultDiv.textContent = `You selected: ${choice.value}`;
    } else {
        resultDiv.textContent = 'Please select an option.';
    }
});
