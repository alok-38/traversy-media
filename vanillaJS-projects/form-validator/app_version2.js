const formElement = document.getElementById('form');
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const password2Element = document.getElementById('password2');

formElement.addEventListener('submit', function (event) {
	event.preventDefault();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();


	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords do not match');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const smallElement = formControl.querySelector('small');

	// add error message inside small
	smallElement.innerText = message;

	// add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement; // .form-control
	formControl.className = 'form-control success';
}

function isEmail(email) {
	// regular expression for email validation
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}