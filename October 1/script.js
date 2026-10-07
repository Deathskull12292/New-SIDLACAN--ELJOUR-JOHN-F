calculate.addEventListener('click', function() 
{
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = weight / ((height / 100) ** 2);

    const bmiResult = document.getElementById('bmi-result');
    bmiResult.textContent = `Your BMI is: ${result.toFixed(2)}`;
    if (result < 18.5) {
        bmiResult.textContent += ' (Underweight)';
    } else if (result < 25) {
        bmiResult.textContent += ' (Normal weight)';
    } else if (result < 30) {
        bmiResult.textContent += ' (Overweight)';
    } else {
        bmiResult.textContent += ' (Obese)';
    }
});