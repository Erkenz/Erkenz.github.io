let passwordCheck = false;
let messagePass = document.getElementById("message");
let inputPassConfirm = document.getElementById("passConfirm");
let inputPass = document.getElementById("pass");
const apiUrl = 'https://localhost:44331/api/';


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

const Form = document.getElementById('wachtwoordForm');
Form.addEventListener('submit', handleLogin)

function handleLogin(event) {
    event.preventDefault();

    if (passwordCheck) {
        const data = new FormData(event.target);
        const password = data.get('pass');
        const email = getCookie("userInfo").email;
        PostRequest(email, password);
    }
}

function PostRequest(email, password) {
    const messageHeaders = new Headers({ // (1)
        'Content-Type': 'application/json'
    })

    let user = { email, password }

    fetch(apiUrl + 'PasswordForgot', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: messageHeaders
        })
        .then(validateResponse)
        .then(readResponseAsText)
        .then(logResult)
        .catch(logError);
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

function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.log('Looks like there was a problem:', error);
}

function getCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}