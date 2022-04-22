let message = document.getElementById("Message");

const form = document.getElementById('formVergeten');
form.addEventListener('submit', handleRegister);

function handleRegister(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get('email');
    vergetenPostRequest(email);
}

const apiUrl = 'https://localhost:44331/api/';

function vergetenPostRequest(Email) {
    const messageHeaders = new Headers({ // (1)
        'Content-Type': 'application/json'
    })

    fetch(apiUrl + 'PasswordForgot', {
            method: 'POST',
            body: JSON.stringify(Email),
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

function readResponseAsText(response) {
    return response.text(); // (1)
}

function logResult(result) {
    message.style.display = "block";
    console.log(result);
}

function logError(error) {
    message.style.display = "block";
    console.log('Looks like there was a problem:', error);
}