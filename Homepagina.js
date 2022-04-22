const navLink = document.querySelectorAll('.menu-item');
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let loginknop = document.getElementById("loginKnop");
const preloader = document.querySelector('.preloader');
let acount = document.getElementById('acountKnop');
let loginMob = document.querySelector('.inlogKnopMobile');
let accMob = document.querySelector('.accKnopMobile');


window.addEventListener("load", function() {
    checkLogin();
    loadingScreen();
});
//openen en sluiten van de mobile navigation nadat er op de hamburger icon geklikt wordt

hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
    hamburger.classList.toggle("change");

})

//navbar style veranderen na het openklikken van de dropdown menu

let navBar = document.querySelector(".navbar")
let clicked = false;

function toggleStyleNav() {
    if (clicked) {
        clicked = false
        navBar.style.borderRadius = "15px";
    } else {
        navBar.style.borderRadius = "15px 15px 0 0";

        clicked = true;
    }
}


//Sluiten van de mobile navigation nadat er op een link geklikt wordt
function linkAction() {
    menu.classList.remove('active');
    document.getElementsByClassName("navbar")[0].style.borderRadius = "15px";
    clicked = false;
    hamburger.classList.toggle("change");


}
navLink.forEach(n => {
    n.addEventListener('click', linkAction);
});



//producten filter openen en sluiten
let filterContainer = document.getElementsByClassName('zoek-container')[0]
let filter = true

function toggleStyleFilter() {
    if (filter === false) {
        filterContainer.style.left = "-400px";
        filter = true
    } else {
        filterContainer.style.left = "0";
        filter = false;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1250) {
        filterContainer.style.left = "0";
    } else {
        filterContainer.style.left = "-400px";
    }
});


//FILTEREN op merken
function toggle(merk) {
    let divArray = document.getElementsByTagName("div");
    for (i = divArray.length - 1; i >= 0; i--) {
        if (divArray[i].id.match("_" + merk + "_")) {
            if (divArray[i].style.display !== 'none') {
                divArray[i].style.display = 'none';
            } else {
                divArray[i].style.display = '';
            }
        }
    }
}
toggle()

//-------------TERUG NAAR BOVEN KNOP------------------------------
button = document.getElementById("naarBoven");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/////////// gebruiker ingelogd functie ///////////////

function checkLogin() {
    accMob.style.display = "none"
    if (getCookie("userInfo") != null) {
        loginknop.style.display = "none";
        acount.style.display = "block";
        loginMob.style.display = "none";
        accMob.style.display = "block";
    }
}
///////// loading scherm zpdat pagina volledig kan laden ///////////
function loadingScreen() {
    setTimeout(function() {
        fadeOutEffect = setInterval(() => {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            }
            if (preloader.style.opacity == 0) {
                preloader.style.display = "none";
            } else {
                clearInterval(0);
            }
        }, 300);
    }, 1000);
}

function getCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}