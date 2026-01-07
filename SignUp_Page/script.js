"use strict";
function signup() {
    const username = document.getElementById("username");
    const age = document.getElementById("age");
    const password = document.getElementById("password");
    const link = document.getElementById("link");
    console.log(username.value, password.value);
    if (username.value !== "" && age.value !== "" && password.value !== "") {
        alert("Sign Up Successful");
        link.click();
        // const name = username.value;
        // const userage = Number(age.value);
        // const userpassword = password.value; 
        localStorage.setItem("name", username.value);
        localStorage.setItem("age", age.value);
        localStorage.setItem("password", password.value);
    }
    else {
        alert("Please fill all the details");
    }
}
