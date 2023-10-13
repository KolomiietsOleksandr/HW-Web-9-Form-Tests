document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const resultDiv = document.getElementById('result');
    const formDataList = document.getElementById('form-data');
    const submitButton = form.querySelector('button[type="submit"]');
    const passwordInput = form.querySelector('#password-input');
    const confirmPasswordInput = form.querySelector('#confirm-password-input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formElements = form.querySelectorAll('input');
        formElements.forEach(element => element.classList.remove('success', 'error'));

        const passwordHint = document.querySelector('.password-hint');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!passwordInput.value.match(passwordRegex)) {
            passwordHint.textContent = 'Password should contain small and capital letters, numbers, and special symbols.';
            passwordHint.style.color = '#E74C3C';
            passwordInput.classList.add('error');
            submitButton.disabled = true;
        } else {
            passwordHint.textContent = 'Password format is valid.';
            passwordHint.style.color = '#4CAF50';
            passwordInput.classList.add('success');
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordHint.textContent = 'Passwords do not match.';
            passwordHint.style.color = '#E74C3C';
            passwordInput.classList.add('error');
            confirmPasswordInput.classList.add('error');
            submitButton.disabled = true;
        } else {
            confirmPasswordInput.classList.add('success');
            submitButton.disabled = false;
        }

        if (form.checkValidity()) {
            resultDiv.classList.remove('hidden');
            formDataList.innerHTML = '';

            formElements.forEach(element => {
                if (element.type !== 'radio' || (element.type === 'radio' && element.checked)) {
                    const li = document.createElement('li');
                    li.textContent = `${element.id}: ${element.value}`;
                    formDataList.appendChild(li);
                }
            });
        } else {
            formElements.forEach(element => {
                if (!element.checkValidity()) {
                    element.classList.add('error');
                }
            });
        }
    });


    passwordInput.addEventListener('input', function() {
        const value = this.value;
        const hint = document.querySelector('.password-hint');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (value.length < 8) {
            hint.textContent = 'Password must be at least 8 characters.';
            hint.style.color = '#E74C3C';
            submitButton.disabled = true;
        } else if (!value.match(/[a-z]/) || !value.match(/[A-Z]/) || !value.match(/\d/) || !value.match(/[!@#$%^&*]/)) {
            hint.textContent = 'Password should contain small and capital letters, numbers, and special symbols.';
            hint.style.color = '#E74C3C';
            submitButton.disabled = true;
        } else if (!value.match(passwordRegex)) {
            hint.textContent = 'Password format is invalid.';
            hint.style.color = '#E74C3C';
            submitButton.disabled = true;
        } else {
            hint.textContent = 'Password format is valid.';
            hint.style.color = '#4CAF50';
            submitButton.disabled = false;
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (passwordInput.value !== this.value) {
            this.classList.add('error');
            submitButton.disabled = true;
        } else {
            this.classList.remove('error');
            submitButton.disabled = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const factorialInput = document.getElementById('factorial-input');
    const calculateButton = document.getElementById('calculate-button');
    const factorialResult = document.getElementById('factorial-result');

    calculateButton.addEventListener('click', function() {
        const input = factorialInput.value;
        const result = getFactorial(input);
        factorialResult.textContent = `Result: ${result}`;
    });

    function getFactorial(n) {
        if (typeof n === 'number') {
            if (n === 0) {
                return 1;
            } else if (n < 0) {
                return 'not a valid input';
            } else {
                return n * getFactorial(n - 1);
            }
        } else if (typeof n === 'string' && !isNaN(n)) {
            const number = parseInt(n, 10);
            return getFactorial(number);
        } else {
            return 'not a number';
        }
    }

    const multiplyInput = document.getElementById('multiply-input');
    const multiplyButton = document.getElementById('multiply-button');
    const multiplyResult = document.getElementById('multiply-result');

    multiplyButton.addEventListener('click', function() {
        const values = multiplyInput.value.split(/\s+/).map(parseFloat);
        const result = multiply(...values);

        multiplyResult.textContent = `Result: ${result}`;
    });

    function multiply(...values) {
        return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    }
});