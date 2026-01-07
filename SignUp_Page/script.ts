function signup(): void {
    const username = document.getElementById("username") as HTMLInputElement;
    const age = document.getElementById("age") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const link =document.getElementById("link") as HTMLAnchorElement;
    

    console.log(username.value, password.value);
    


    if(username.value !== "" && age.value !== "" && password.value !== ""){
        alert("Sign Up Successful");
        link.click();
        // const name = username.value;
        // const userage = Number(age.value);
        // const userpassword = password.value; 
        localStorage.setItem("name", username.value);
        localStorage.setItem("age", age.value);
        localStorage.setItem("password",password.value)
        }
    else{
        alert("Please fill all the details");
    }
}