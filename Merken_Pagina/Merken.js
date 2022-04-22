/*======MAIN ======*/
let hovereffect = document.getElementsByClassName("hover1");
console.log(hovereffect.length);
let hv = document.getElementsByClassName("hover2")

for (let i = 0; i < hovereffect.length; i++) {
    hovereffect[i].addEventListener("mouseover", function () {

        hv[i].style.backgroundColor = "#0082e6";
    })
    hovereffect[i].addEventListener("mouseleave", function () {
        hv[i].style.backgroundColor = "dimgray";
    })
}







