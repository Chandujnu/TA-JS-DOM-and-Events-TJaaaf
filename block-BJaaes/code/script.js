let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let allSmall = Array.from(document.querySelectorAll("small"))

let usernameError = "";
function displayError(userinfo){
    userinfo.classList.remove("success")
    userinfo.classList.add("error")
}
function displaySuccess(userinfo){
   userinfo.classList.remove("error")
   userinfo.classList.add("success")
}

function validateUserName(str) {
    if (str.length < 4) {
        return `Username can't be less than 4 characters`
    }
    else {
       displaySuccess(form.elements["username"]);
    return ""}
}
function validateName(str) {
    if(str.includes(Number)) {
        return`You can't use number in name field`;
    } else {
        displaySuccess(form.elements["name"]);
    }
}
function validateEmail(str) {
    if (!(str.includes("@"))) {
        return `Not a valid Email`
    } 
    else if (str.length < 6) {
        return `Enter atleast 6 caracter`
    }
    else {
        displaySuccess(form.elements["email"])
    return ""}
}
function validatePhone(num) {
    if (isNaN(+num)) {
        return `Phone number can only contain numbers`
    }
    else if (num.length < 7) {
        input[2].classList.add("error");       
        return `Length of phone number can't be less than 7`
    } 
    else {
        displaySuccess(form.elements["phone"])
    return ""}
}

function validatePassword(pass,cPass){
    if (pass === "" || cPass === "") {
       return `Password can't be empty`
    }
    else if (pass !== cPass) {
        return `Password and confirm password must be same.`
    }else{
        allSmall[4].innerText = ""
        displaySuccess(form.elements["pass"])
        displaySuccess(form.elements["cPass"])
    }
}
function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    let username = elements.username;
    let email = elements.email;
    let phone = elements.PhoneNo;
    let pass = elements.password;
    let cPass = elements.conPassword;
    console.log(event.target)
    allSmall.forEach((a) => a.innerText = "")
    if (validateUserName(username.value)) {
        allSmall[0].innerText = validateUserName(username.value);
        displayError(form.elements["username"])
    }
    else if(validateName (name.value)) {
        allSmall[1].innerText = validateName(name.value);
        displayError(form.elements["name"]);
    }
    else if (validateEmail(email.value)) {
        allSmall[2].innerText = validateEmail(email.value)
        displayError(form.elements["email"])
    }
    else if (validatePhone(phone.value)) {
        allSmall[3].innerText = validatePhone(phone.value)
        displayError(form.elements["phone"])

    }else if (validatePassword(pass.value,cPass.value)){
        allSmall[4].innerText = validatePassword(pass.value,cPass.value)
        displayError(form.elements["pass"])
        displayError(form.elements["cPass"])
    }
 
    else alert(`User Added Successfully!`)
}

form.addEventListener("submit", handleSubmit);

