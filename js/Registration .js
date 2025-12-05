document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    
    let fullnameError = document.getElementById("fullnameError");
    let emailError = document.getElementById("emailError");
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let success = document.getElementById("success");

    
    fullnameError.textContent = "";
    emailError.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    success.textContent = "";

    let valid = true;

    
    if (fullname === "") {
        fullnameError.textContent = "Full name is required!";
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(fullname)) {
        fullnameError.textContent = "Full name can contain only letters!";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required!";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Enter a valid email!";
        valid = false;
    }

    if (username === "") {
        usernameError.textContent = "Username is required!";
        valid = false;
    } else if (!/^[A-Za-z]+$/.test(username)) {
        usernameError.textContent = "Username must contain only letters!";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required!";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        valid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password!";
        valid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match!";
        valid = false;
    }

    if (valid) {
        success.textContent = "Registration Successful!";
        success.style.color = "green";
    }
});
