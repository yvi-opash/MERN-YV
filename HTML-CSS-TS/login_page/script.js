"use strict";
// function submit(): void {
//     const username = document.getElementById("username") as HTMLInputElement;
//     const password =document.getElementById("password") as HTMLInputElement;
//     const message = document.getElementById("message") as HTMLParagraphElement
//     const a =document.getElementById("a") as HTMLAnchorElement;
//     const storedname = localStorage.getItem("name");
//     const storedpassword = localStorage.getItem("password");
//     console.log(storedname, storedpassword);
//     if(username.value === storedname && password.value === storedpassword) {
//         message.innerText = "Login Successfully";
//         message.style.color = "green";
//         a.click();
//     }
//     else {
//         message.innerText = "invalid username or password";
//         message.style.color = "red";
//         username.style.borderColor = "red";
//         password.style.borderColor = "red";
//     }
// }
const form = document.getElementById("loginform");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const a = document.getElementById("a");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const storedname = localStorage.getItem("name");
    const storedpassword = localStorage.getItem("password");
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
});
