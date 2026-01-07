"use strict";
function submit() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");
    const a = document.getElementById("a");
    const storedname = localStorage.getItem("name");
    const storedpassword = localStorage.getItem("password");
    console.log(storedname, storedpassword);
    if (username.value === storedname && password.value === storedpassword) {
        message.innerText = "Login Successfully";
        message.style.color = "green";
        a.click();
    }
    else {
        message.innerText = "invalid username or password";
        message.style.color = "red";
        username.style.borderColor = "red";
        password.style.borderColor = "red";
    }
}
