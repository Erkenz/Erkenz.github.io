const apiUrl = 'https://localhost:44331/api/';
let useridFromUrl = window.location.href.split('?')
let url = apiUrl + 'Confirm/' + useridFromUrl[1];

window.onload = function() {
    sendConfirmation()
}



function sendConfirmation() {
    fetch(url)
        .then(validateResponse)
        .then(readResponseAsJSON)
        .then(logResult)
        .catch(logError);
}

function validateResponse(response) {
    console.log(response)
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function readResponseAsText(response) {
    return response.text();
}

function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.log('Looks like there was a problem:', error);
}

function readResponseAsJSON(response) {
    return response.json(); // (1)
}

function getCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}