function formValidator() {

    let username = document.getElementById("uname");
    let password = document.getElementById("pwd");

    // Check empty fields
    if (isEmpty(username) || isEmpty(password)) {
        alert("Please fill in all fields!");
        username.focus();
        return false;
    }

    // Check only alphabet letters
    if (!isAlphabet(username)) {
        alert("Username must contain only letters!");
        username.focus();
        return false;
    }

    // Password length check
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long!");
        password.focus();
        return false;
    }

    alert("Validation successful!");
    return true;
}

// Check empty field
function isEmpty(elem) {
    return elem.value.trim().length === 0;
}

// Check alphabet characters only
function isAlphabet(elem) {
    var alphaExp = /^[A-Za-z]+$/;
    return elem.value.match(alphaExp);
}