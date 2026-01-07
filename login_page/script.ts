function login(): void {
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLParagraphElement;

    if (username.value === "admin" && password.value === "1234") {
        message.style.color = "green";
        message.innerText = "Login Successful ✅";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid Username or Password ❌";
    }
}
