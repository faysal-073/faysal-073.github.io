function registerUser() {

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

   
    if (fullname === "" || email === "" || username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        return false;
    }

    
    if (!/^[A-Za-z ]+$/.test(fullname)) {
        alert("Full name can contain only letters!");
        return false;
    }

   
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Enter a valid email address!");
        return false;
    }

    
    if (!/^[A-Za-z]+$/.test(username)) {
        alert("Username must contain only letters!");
        return false;
    }

    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

   
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    return true; 
}
