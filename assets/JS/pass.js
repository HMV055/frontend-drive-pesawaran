// Toggle password visibility for Password field
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Change icon
    const icon = type === "password" ? "assets/img/hidden.png" : "assets/img/eye.png";
    togglePassword.setAttribute("src", icon);
});

// Toggle password visibility for Confirm Password field
const toggleConfirmPass = document.getElementById("toggleConfirmPass");
const confirmPassField = document.getElementById("confirm_pass");

toggleConfirmPass.addEventListener("click", function () {
    const type = confirmPassField.getAttribute("type") === "password" ? "text" : "password";
    confirmPassField.setAttribute("type", type);

    // Change icon
    const icon = type === "password" ? "assets/img/hidden.png" : "assets/img/eye.png";
    toggleConfirmPass.setAttribute("src", icon);
});
