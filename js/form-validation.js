// Form Validation for Signup Page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", (e) => {
        // Reset errors
        resetErrors();

        let isValid = true;

        // Validate Username
        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username is required.");
            isValid = false;
        }

        // Validate Email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address.");
            isValid = false;
        }

        // Validate Password
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters long.");
            isValid = false;
        }

        // Validate Confirm Password
        if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, "Passwords do not match.");
            isValid = false;
        }

        // If the form is invalid, prevent submission
        if (!isValid) {
            e.preventDefault();
        }
    });

    // Utility Functions
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement("small");
        errorElement.textContent = message;
        errorElement.style.color = "red";
        formGroup.appendChild(errorElement);
        input.style.borderColor = "red";
    }

    function resetErrors() {
        const errors = document.querySelectorAll("small");
        errors.forEach((error) => error.remove());

        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.style.borderColor = ""));
    }
   
    
});
