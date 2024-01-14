/*
----------------------------------------------------------HOME PAGE----------------------------------------------
*/
document.addEventListener('DOMContentLoaded', function () {
    // Notification
    let bell = document.querySelector('.notification');

    // Toggle Menu
    let menu = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.menu');

    // Check if menu and navbar elements exist before adding event listener
    if (menu && navbar) {
        // Event listener for menu button click
        menu.addEventListener('click', () => {
            // Toggle 'active' class on navbar and 'move' class on menu
            navbar.classList.toggle('active');
            menu.classList.toggle('move');

            // If bell element exists, remove 'active' class
            if (bell) {
                bell.classList.remove('active');
            }
        });
    }

    // Check if bell element exists before adding event listener
    if (bell) {
        // Event listener for bell icon click
        document.querySelector('#bell-icon').addEventListener('click', () => {
            // Toggle 'active' class on bell element
            bell.classList.toggle('active');
        });
    }

    // Swiper Initialization
    var swiper = new Swiper('.trending-content', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1068: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

// Login Popup Styles
let showLoginButton = document.getElementById('show-login');
let loginPopup = document.querySelector('.popup');
let closeBtn = document.querySelector('.close-btn');
let loginButton = document.querySelector('.form-element button');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let emailValidationMessage = document.getElementById('email-validation-message');
let passwordValidationMessage = document.getElementById('password-validation-message');

// Set initial state for the login button
loginButton.disabled = true;
loginButton.style.backgroundColor = 'rgba(52, 152, 219, 0.5)'; // Set a less opaque color for inactive state

// Clicking on login button
showLoginButton.addEventListener('click', function () {
    loginPopup.classList.add('active');
});

// Function to enable or disable the login button based on input fields
function updateLoginButtonState() {
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    // Enable the login button only if both email and password are filled
    loginButton.disabled = !(emailValue && passwordValue);

    // Update button style based on its state
    if (loginButton.disabled) {
        loginButton.style.backgroundColor = 'rgba(52, 152, 219, 0.5)'; // Set a less opaque color for inactive state
    } else {
        loginButton.style.backgroundColor = '#fa5353'; // Set the original color for active state
    }
}

// Add input event listeners to both email and password fields
emailInput.addEventListener('input', updateLoginButtonState);
passwordInput.addEventListener('input', updateLoginButtonState);

// Add an event listener for the Enter key on the password input
passwordInput.addEventListener('keyup', function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === 'Enter' && !loginButton.disabled) {
        // Trigger the click event on the login button
        loginButton.click();
    }
});

    // Close button element
    let closeButton = document.querySelector('.close');

    // Event listener for the close button
    closeButton.addEventListener('click', function () {
        loginPopup.classList.remove('active');
    });

window.addEventListener('click', function (e) {
    if (e.target === loginPopup) {
        loginPopup.classList.remove('active');
    }
});

loginButton.addEventListener('click', function () {
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    // Validate empty inputs
    if (emailValue === '' || passwordValue === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Validate email and password
    if (!isValidEmail(emailValue)) {
        emailValidationMessage.innerHTML = 'Please enter a valid email address. <br> Must contain: <br> -@ and .com';
        return;
    } else {
        emailValidationMessage.textContent = '';
    }

    if (!isValidPassword(passwordValue)) {
        passwordValidationMessage.innerHTML = 'Please enter a valid password. <br> Must at least contain: <br> -An uppercase letter <br> -Numbers <br> -A symbol <br> -more than 8 characters';
        return;
    } else {
        passwordValidationMessage.textContent = '';
    }

    // Simulate a brief delay (2 seconds) for the login process
    alert('Logging in. Please wait...');

    // Redirect to the homepage after successful login
    window.location.href = 'file:///G:/DEGREE/ITT588_Front-End/GroupWork/homepage.html';
});

// Function to check if the entered email is in a valid format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to check if the entered password is in a valid format
function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

});

//Show password button
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeSlashIcon = document.getElementById('eye-slash-icon');

    // Show password by default
    passwordInput.type = 'password';
    eyeIcon.style.display = 'inline';
    eyeSlashIcon.style.display = 'none';

    // Toggle eye icons and show/hide password on click
    eyeIcon.addEventListener('click', function () {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'inline';
    });

    eyeSlashIcon.addEventListener('click', function () {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'inline';
        eyeSlashIcon.style.display = 'none';
    });
});

/*
----------------------------------------------------------NEW PAGE----------------------------------------------
*/

//SIGNUP PAGE
document.addEventListener('DOMContentLoaded', function () {
    // Signup Form Elements
    let signupButton = document.querySelector('.form-element button');
    let emailInput = document.getElementById('email');
    let nameInput = document.getElementById('name');
    let passwordInput = document.getElementById('password');
    let countrySelect = document.getElementById('country');
    let eyeIcon = document.getElementById('eye-icon');
    let eyeSlashIcon = document.getElementById('eye-slash-icon');
    let emailValidationMessage = document.getElementById('email-validation-message');
    let passwordValidationMessage = document.getElementById('password-validation-message');

    // Function to enable or disable the signup button based on input fields
    function updateSignupButtonState() {
        let emailValue = emailInput.value.trim();
        let nameValue = nameInput.value.trim();
        let passwordValue = passwordInput.value.trim();
        let countryValue = countrySelect.value;

        // Validate email format
        if (!isValidEmail(emailValue)) {
            emailValidationMessage.textContent = 'Please enter a valid email address.';
        } else {
            emailValidationMessage.textContent = '';
        }

        // Validate password format
        if (!isValidPassword(passwordValue)) {
            passwordValidationMessage.textContent = 'Please enter a valid password. Password must be at least 8 characters long.';
        } else {
            passwordValidationMessage.textContent = '';
        }

        // Enable the signup button only if all fields are filled and valid
        signupButton.disabled = !(emailValue && nameValue && passwordValue && countryValue && isValidEmail(emailValue) && isValidPassword(passwordValue));
        updateSignupButtonStyle(); // Update button style based on its state
    }

    // Add input event listeners to all signup form fields
    emailInput.addEventListener('input', updateSignupButtonState);
    nameInput.addEventListener('input', updateSignupButtonState);
    passwordInput.addEventListener('input', updateSignupButtonState);
    countrySelect.addEventListener('change', updateSignupButtonState); // Listen for dropdown change

    // Show/Hide Password Functionality
    eyeIcon.addEventListener('click', function () {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none';
        eyeSlashIcon.style.display = 'block';
    });

    eyeSlashIcon.addEventListener('click', function () {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'block';
        eyeSlashIcon.style.display = 'none';
    });

    // Signup Button Click Event
    signupButton.addEventListener('click', function () {
        let emailValue = emailInput.value.trim();
        let nameValue = nameInput.value.trim();
        let passwordValue = passwordInput.value.trim();
        let countryValue = countrySelect.value;

        // Validate email format
        if (!isValidEmail(emailValue)) {
            emailValidationMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Validate password format
        if (!isValidPassword(passwordValue)) {
            passwordValidationMessage.textContent = 'Please enter a valid password. Password must be at least 8 characters long.';
            return;
        }

        // Simulate a brief delay (2 seconds) for the login process
        alert('Signing in your account. Please wait...');

        // Redirect to the homepage after successful signup
        window.location.href = 'file:///G:/DEGREE/ITT588_Front-End/GroupWork/Gamex-Group-Project/homepage.html#';
    });

    // Function to check if the entered email is in a valid format
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to check if the entered password is in a valid format
    function isValidPassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }

    // Function to update button style based on its state
    function updateSignupButtonStyle() {
        if (signupButton.disabled) {
            signupButton.style.backgroundColor = 'rgba(52, 152, 219, 0.5)'; // Set a less opaque color for inactive state
        } else {
            signupButton.style.backgroundColor = '#fa5353'; // Set the original color for active state
        }
    }
});
