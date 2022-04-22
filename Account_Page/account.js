let knopBewerkenNaam = document.querySelector('.bewerken_naam');
let submitKnopNaam = document.querySelector('.submit_naam');
let naam = document.querySelector('.naam');
let naamInput = document.getElementById('input_naam');
let email2 = document.getElementById("emailaccount");
let emailInput = document.getElementById('input_email');
let newcookieinfo;
const apiUrl = 'https://localhost:44331/api/';
let uitloggen = document.getElementById("uitloggen");

// window.addEventListener("load", function() {
//     let naamsub = document.cookie.substring(document.cookie.indexOf("userName") + 11);
//     naam.innerHTML = naamsub.substring(0, naamsub.indexOf('","'));
//     let email = document.cookie.substring(document.cookie.indexOf("email") + 8);
//     email2.innerHTML = email.substring(0, email.indexOf('"'))
// })

window.onload = function() {
    naam.innerHTML = getCookie("userInfo").userName;
    email2.innerHTML = getCookie("userInfo").email;
}

knopBewerkenNaam.addEventListener('click', function() {
    {
        knopBewerkenNaam.style.display = 'none';
        submitKnopNaam.style.display = 'block';
        naam.style.display = 'none';
        naamInput.style.display = 'block';
        naamInput.value = naam.innerHTML;
    }

});

function annuleren() {
    knopBewerkenNaam.style.display = 'block';
    submitKnopNaam.style.display = 'none';
    naam.style.display = 'block';
    naamInput.style.display = 'none';

}

let knopBewerkenEmail = document.querySelector('.bewerken_email');
let submitKnopEmail = document.querySelector('.submit_email');
let email = document.querySelector('.email');

knopBewerkenEmail.addEventListener('click', function() {
    {
        knopBewerkenEmail.style.display = 'none';
        submitKnopEmail.style.display = 'block';
        email.style.display = 'none';
        emailInput.style.display = 'block';
        emailInput.value = email.innerHTML;
    }

});

function annulerenEmail() {
    knopBewerkenEmail.style.display = 'block';
    submitKnopEmail.style.display = 'none';
    email.style.display = 'block';
    emailInput.style.display = 'none';

}
uitloggen.addEventListener("click", function() {
    document.cookie = "userInfo=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    window.location.replace("..\\Homepagina.html");
})

function getCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}

function NameChangePost() {
    const userID = getCookie("userInfo").userId;
    const username = naamInput.value;
    const email = getCookie("userInfo").email;
    const post = 'UserNameChange';
    ChangePostRequest(userID, username, email, post);

    // veranderd naam in cookie
    newcookieinfo = getCookie("userInfo");
    newcookieinfo.userName = naamInput.value;
    setCookie('userInfo', JSON.stringify(newcookieinfo), 10);
    naam.innerHTML = getCookie("userInfo").userName;
    annuleren();
}

function EmailChangePost() {
    const username = getCookie("userInfo").userName;
    const userID = getCookie("userInfo").userId;
    const email = emailInput.value;
    const post = 'UserEmailChange';
    ChangePostRequest(userID, username, email, post);

    //veranderd email in cookie
    newcookieinfo = getCookie("userInfo");
    newcookieinfo.email = emailInput.value;
    setCookie('userInfo', JSON.stringify(newcookieinfo), 10);
    email2.innerHTML = getCookie("userInfo").email;
    annulerenEmail();
}


function ChangePostRequest(UserID, Username, Email, Posttype) {
    const messageHeaders = new Headers({ // (1)
        'Content-Type': 'application/json'
    })

    let UserInfo = { UserID, Username, Email }

    fetch(apiUrl + Posttype, {
            method: 'POST',
            body: JSON.stringify(UserInfo),
            headers: messageHeaders
        })
        .then(validateResponse)
        .then(readResponseAsText)
        .then(logResult)
        .catch(logError);
}

function logResult(result) {
    console.log(result);
}

function logError(error) {
    console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
    console.log(response)
    if (!response.ok) { // (1)
        throw Error(response.statusText); // (2)
    }
    return response;
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