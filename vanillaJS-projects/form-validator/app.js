const formElement = document.querySelector('.form');
const h2Element = document.querySelector('h2');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const buttonElement = document.querySelector('button');

// Corrected to target specific error elements
const emailErrorEl = document.querySelector('.email-error');
const passwordErrorEl = document.querySelector('.password-error');

// Add event listeners to password fields to validate as the user types
passwordInput.addEventListener('input', validatePasswords);
password2Input.addEventListener('input', validatePasswords);

// Function to validate passwords
function validatePasswords() {
    const password = passwordInput.value.trim();
    const password2 = password2Input.value.trim();

    if (password !== password2) {
        displayPasswordError('Passwords do not match');
    } else {
        clearPasswordError();
    }
}

// Add an event listener to the form submit event
formElement.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const email = emailInput.value.trim();
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayEmailError('Invalid email');
        return;
    }
    // If the email is valid, clear any existing email error message
    clearEmailError();

    // Password
    const password = passwordInput.value.trim();
    const password2 = password2Input.value.trim();

    if (password !== password2) {
        displayPasswordError('Passwords do not match');
        return;
    } else {
        // If the passwords match, clear any existing password error message
        clearPasswordError();
    }

    // If all validations pass, submit the form
    formElement.submit();
});

function displayEmailError(message) {
    emailErrorEl.textContent = message;
}

function clearEmailError() {
    emailErrorEl.textContent = '';
}

function displayPasswordError(message) {
    passwordErrorEl.textContent = message;
}

function clearPasswordError() {
    passwordErrorEl.textContent = '';
}
