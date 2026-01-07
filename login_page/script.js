"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");
    if (username.value === "admin" && password.value === "1234") {
        message.style.color = "green";
        message.innerText = "Login Successful ✅";
    }
    else {
        message.style.color = "red";
        message.innerText = "Invalid Username or Password ❌";
    }
}
//# sourceMappingURL=script.js.map