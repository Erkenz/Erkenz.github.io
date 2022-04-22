let loginknop = document.getElementById("loginKnop");
const preloader = document.querySelector('.preloader');
let acount = document.getElementById('acountKnop');
window.addEventListener("load", function() {
    checkLogin();
    loadingScreen();
});

function checkLogin() {
    if (getCookie("userInfo") != null) {
        loginknop.style.display = "none";
        acount.style.display = "block"
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

function naam()
{
    if (document.getElementById('Naam').value === "Naam")
    {
        document.getElementById('Naam').value = "";
    }
}

function email()
{
    if (document.getElementById('Email').value === "E-mailadres")
    document.getElementById('Email').value = "";
}

function telefoonNummer()
{
    if (document.getElementById('TelefoonNummer').value === "Telefoonnummer")
    {
        document.getElementById('TelefoonNummer').value = "";
    }
}

function bericht()
{
    if (document.getElementById('Bericht').value === "Bericht")
    {
        document.getElementById('Bericht').value = "";
    }

}