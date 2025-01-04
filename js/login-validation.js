document.addEventListener("DOMContentLoaded", () => {
    console.log("Login validation script loaded!");
  
    const loginForm = document.querySelector("#login-form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        console.log("Login form submission triggered");
        event.preventDefault();
  
        // Clear previous errors
        clearErrors(loginForm);
  
        let isValid = true;
  
        // Validate Username
        const usernameInput = loginForm.querySelector("#username");
        if (!usernameInput || usernameInput.value.trim() === "") {
          displayError(usernameInput, "Username cannot be empty.");
          isValid = false;
        }
  
        // Validate Password
        const passwordInput = loginForm.querySelector("#password");
        if (!passwordInput || passwordInput.value.trim() === "") {
          displayError(passwordInput, "Password cannot be empty.");
          isValid = false;
        }
  
        // If valid, submit the form
        if (isValid) {
          console.log("Login form is valid, submitting...");
          loginForm.submit();
        } else {
          console.log("Login form validation failed!");
        }
      });
    }
  
    // Utility functions
    function displayError(input, message) {
      if (!input) {
        console.error("Input element not found for displaying error.");
        return;
      }
  
      const errorElement = document.createElement("span");
      errorElement.className = "error";
      errorElement.style.color = "red";
      errorElement.textContent = message;
      input.parentElement.appendChild(errorElement);
  
      input.style.border = "1px solid red";
    }
  
    function clearErrors(form) {
      const errorMessages = form.querySelectorAll(".error");
      errorMessages.forEach((error) => error.remove());
  
      const inputs = form.querySelectorAll("input");
      inputs.forEach((input) => (input.style.border = ""));
    }
  });
  