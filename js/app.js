document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username");
    let pass = document.getElementById("password");

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let success = document.getElementById("success");

    userError.textContent = "";
    passError.textContent = "";
    success.textContent = "";

    let valid = true;

   
    if (user.value.trim() === "") {
        userError.textContent = "Username is required!";
        valid = false;
    } else if (!/^[A-Za-z]+$/.test(user.value)) {
        userError.textContent = "Username must contain only letters!";
        valid = false;
    }

    
    if (pass.value.trim() === "") {
        passError.textContent = "Password is required!";
        valid = false;
    } else if (pass.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters!";
        valid = false;
    }

    if (valid) {
        success.textContent = "Login Successful!";
        success.style.color = "green";

       
    }
});
