let inputPass = document.getElementById("pass");
let inputPassConfirm = document.getElementById("passConfirm");
let RegisterForm = document.getElementById("cfRegister");
let LoginForm = document.getElementById("cfLogin");
let RegisterBtn = document.getElementById("signinBtn");
let LoginBtn = document.getElementById("loginBtn");
let RegisterSubmit = document.getElementById("submitRegisterBtn");
let LoginSubmit = document.getElementById("submitLoginBtn");
let messagePass = document.getElementById("message");
let foutLoginMessage = document.getElementById("loginMessage");
let messageEmail = document.getElementById("emailbestaatal");
let formEmail = document.getElementById("email");
let passwordCheck = false;

window.onload = function() {
    messagePass.style.display = "none";
    foutLoginMessage.style.display = "none";
    messageEmail.style.display = "none";
}

inputPass.onkeyup = function() {
    if (inputPass.value != inputPassConfirm.value) {
        messagePass.style.display = "block";
        passwordCheck = false;
    } else {
        messagePass.style.display = "none";
        passwordCheck = true;
    }
}

inputPassConfirm.onkeyup = function() {
    if (inputPass.value != inputPassConfirm.value) {
        messagePass.style.display = "block";
        passwordCheck = false;
    } else {
        messagePass.style.display = "none";
        passwordCheck = true;
    }
}

formEmail.onkeyup = function() {
    messageEmail.style.display = "none";
}

RegisterBtn.onclick = function() {
    RegisterBtn.style.textDecoration = "underline 5px #0082e6";
    LoginBtn.style.textDecoration = "underline 2px"
    LoginForm.style.display = "none";
    RegisterForm.style.display = "block";
}

LoginBtn.onclick = function() {
    LoginBtn.style.textDecoration = "underline 5px #0082e6";
    RegisterBtn.style.textDecoration = "underline 2px"
    RegisterForm.style.display = "none";
    LoginForm.style.display = "block";
}

////////////////////////////////////////////////////////////////login en register functions/////////////////////////////////////////////////

// api url is locaal !!!
const apiUrl = 'https://localhost:44331/api/';

// user registration
const form = document.getElementById('registerForm');
form.addEventListener('submit', handleRegister);

function handleRegister(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    if (passwordCheck) {
        const username = data.get('user');
        const email = data.get('email');
        const password = data.get('pass')
        registerPostRequest(username, email, password);
    }
}

// user login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin)

function handleLogin(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get('emailLogin');
    const password = data.get('passLogin');
    loginPostRequest(email, password);
}

// user register post request
function registerPostRequest(Username, Email, Password) {
    const messageHeaders = new Headers({ // (1)
        'Content-Type': 'application/json'
    })

    let newUser = { Username, Email, Password }

    fetch(apiUrl + 'Users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: messageHeaders
        })
        .then(validateResponse)
        .then(readResponseAsText)
        .then(logResultRegister)
        .catch(logErrorRegistration);
}

// user login post request
function loginPostRequest(Email, Password) {
    const messageHeaders = new Headers({ // (1)
        'Content-Type': 'application/json'
    })

    let loginInfo = { Email, Password }

    fetch(apiUrl + 'UserLogin', {
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: messageHeaders
        })
        .then(validateResponse)
        .then(readResponseAsText)
        .then(logResultLogin)
        .catch(logErrorLogin);
}

// user login & register results
function logResultLogin(result) {
    setCookie("userInfo", result, 10)
    console.log(getCookie("userInfo"));
    window.location.replace("..\\Homepagina.html");
    elementsLoginChange();
}

function logResultRegister(result) {
    window.location.replace("..\\Login_Pagina\\Login.html");
    console.log(result);
}

function logErrorLogin(error) {
    console.log(error);
    foutLoginMessage.style.display = "block";
}

function logErrorRegistration(error) {
    console.log(error);
    messageEmail.style.display = "block";
}

// fetch and post functions
function fetchJSON() {
    fetch(apiUrl + 'users') // (1) (2)
        .then(validateResponse) // (3)
        .then(readResponseAsJSON) // (4)
        .then(logResult) // (5)
        .catch(logError); // (6)
}

function validateResponse(response) {
    console.log(response)
    if (!response.ok) { // (1)
        throw Error(response.statusText); // (2)
    }
    return response;
}

function readResponseAsJSON(response) {
    return response.json(); // (1)
}

function readResponseAsText(response) {
    return response.text(); // (1)
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}


function elementsLoginChange() {
    let inlogKnopDesktop = document.querySelector(".login");
    let inlogKnopMobile = document.querySelector(".loginKnopMobile");
    inlogKnopDesktop.style.display = "none";
    inlogKnopMobile.style.display = "none";
}