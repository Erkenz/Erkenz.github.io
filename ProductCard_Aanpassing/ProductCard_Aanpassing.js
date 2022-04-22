let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");

let btn1 = document.getElementById("btn_img_1");
let btn2 = document.getElementById("btn_img_2");
let btn3 = document.getElementById("btn_img_3");
let btn4 = document.getElementById("btn_img_4");
let btn5 = document.getElementById("btn_img_5");
let btn6 = document.getElementById("btn_img_6");

let switch1 = document.getElementById("totaal-info");
let switch2 = document.getElementById("product_geheel2");
let switch3 = document.getElementById("totaal-info1");
let switch4 = document.getElementById("product_geheel3");

// Create a media condition that targets viewports at least 1250px wide
const mediaQuery1 = window.matchMedia('(min-width: 1250px)')
// Check if the media query is true


btn1.addEventListener("click", () => {
    img3.style.display = "none";
    img2.style.display = "none";
    img1.style.display = "block";
    switch1.style.marginTop = "80px";
    img1.scr = "Vespa_Sprint_Model1_Transparant.png";
    btn1.style.backgroundColor = "#0082e6";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
    btn2.disabled = false;
    btn3.disabled = false;
    btn1.disabled = true;
    btn1.style.cursor = "auto";
    btn2.style.cursor = "pointer"
    btn2.addEventListener("mouseover", () =>{
        btn2.style.backgroundColor = "gray";
        btn2.style.transition = "0.6s";
        btn2.style.transform= "250s";
    })
    btn2.addEventListener("mouseleave", () =>{
        btn2.style.backgroundColor = "white";
    })

    btn3.style.cursor = "pointer";
    btn3.addEventListener("mouseover", () =>{
        btn3.style.backgroundColor = "gray";
        btn3.style.transition = "0.6s";
        btn3.style.transform= "250s";
    })
    btn3.addEventListener("mouseleave", () =>{
        btn3.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch2.style.marginTop = "0";
    }
})

btn2.addEventListener("click", () => {
    img1.style.display = "none";
    img3.style.display = "none";
    img2.style.display = "block";
    switch1.style.marginTop = "25px";

    img2.scr = "Vespa_Sprint_Model2_Transparant.png";
    btn2.style.backgroundColor = "#0082e6";
    btn1.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";

    btn1.disabled = false;
    btn3.disabled = false;
    btn2.disabled = true;
    btn2.style.cursor = "auto";

    btn1.style.cursor = "pointer";
    btn1.addEventListener("mouseover", () =>{
        btn1.style.backgroundColor = "gray";
        btn1.style.transition = "0.6s";
        btn1.style.transform= "250s";
    })
    btn1.addEventListener("mouseleave", () =>{
        btn1.style.backgroundColor = "white";
    })

    btn3.style.cursor = "pointer";
    btn3.addEventListener("mouseover", () =>{
        btn3.style.backgroundColor = "gray";
        btn3.style.transition = "0.6s";
        btn3.style.transform= "250s";
    })
    btn3.addEventListener("mouseleave", () =>{
        btn3.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch2.style.marginTop = "0";
    }
})

btn3.addEventListener("click", () => {
    img1.style.display ="none";
    img2.style.display ="none";
    img3.style.display = "block";
    switch1.style.marginTop = "-25px";
    img3.src = "Vespa_Sprint_Model3_Transparant.png";

    btn3.style.backgroundColor = "#0082e6";
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = true;
    btn3.style.cursor = "auto";

    btn1.style.cursor = "pointer";
    btn1.addEventListener("mouseover", () =>{
        btn1.style.backgroundColor = "gray";
        btn1.style.transition = "0.6s";
        btn1.style.transform= "250s";
    })
    btn1.addEventListener("mouseleave", () =>{
        btn1.style.backgroundColor = "white";
    })

    btn2.style.cursor = "pointer";
    btn2.addEventListener("mouseover", () =>{
        btn2.style.backgroundColor = "gray";
        btn2.style.transition = "0.6s";
        btn2.style.transform= "250s";
    })
    btn2.addEventListener("mouseleave", () =>{
        btn2.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch2.style.marginTop = "0";
    }
})

btn4.addEventListener("click", () => {
    img6.style.display = "none";
    img5.style.display = "none";
    img4.style.display = "block";
    switch3.style.marginTop = "80px";
    img4.scr = "Vespa_Primaverra_Model1_Transparant.png";

    btn4.style.backgroundColor = "#0082e6";
    btn5.style.backgroundColor = "white";
    btn6.style.backgroundColor = "white";

    btn5.disabled = false;
    btn6.disabled = false;
    btn4.disabled = true;
    btn4.style.cursor = "auto";

    btn5.style.cursor = "pointer"
    btn5.addEventListener("mouseover", () =>{
        btn5.style.backgroundColor = "gray";
        btn5.style.transition = "0.6s";
        btn5.style.transform= "250s";
    })
    btn5.addEventListener("mouseleave", () =>{
        btn5.style.backgroundColor = "white";
    })
    btn6.style.cursor = "pointer";
    btn6.addEventListener("mouseover", () =>{
        btn6.style.backgroundColor = "gray";
        btn6.style.transition = "0.6s";
        btn6.style.transform= "250s";
    })
    btn6.addEventListener("mouseleave", () =>{
        btn6.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch4.style.marginTop = "0";
    }
})

btn5.addEventListener("click", () => {
    img4.style.display = "none";
    img6.style.display = "none";
    img5.style.display = "block";
    switch3.style.marginTop = "-40px";
    img5.scr = "Vespa_Primavera_Model2_Transparant.png";

    btn5.style.backgroundColor = "#0082e6";
    btn4.style.backgroundColor = "white";
    btn6.style.backgroundColor = "white";

    btn4.disabled = false;
    btn6.disabled = false;
    btn5.disabled = true;
    btn5.style.cursor = "auto";

    btn4.style.cursor = "pointer";
    btn4.addEventListener("mouseover", () =>{
        btn4.style.backgroundColor = "gray";
        btn4.style.transition = "0.6s";
        btn4.style.transform= "250s";
    })
    btn4.addEventListener("mouseleave", () =>{
        btn4.style.backgroundColor = "white";
    })

    btn6.style.cursor = "pointer";
    btn6.addEventListener("mouseover", () =>{
        btn6.style.backgroundColor = "gray";
        btn6.style.transition = "0.6s";
        btn6.style.transform= "250s";
    })
    btn6.addEventListener("mouseleave", () =>{
        btn6.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch4.style.marginTop = "0";
    }
})

btn6.addEventListener("click", () => {
    img4.style.display ="none";
    img5.style.display ="none";
    img6.style.display = "block";
    switch3.style.marginTop = "-80px";

    img6.src = "Vespa_Primavera_Model3_Transparant.png";
    btn6.style.backgroundColor = "#0082e6";
    btn4.style.backgroundColor = "white";
    btn5.style.backgroundColor = "white";

    btn4.disabled = false;
    btn5.disabled = false;
    btn6.disabled = true;
    btn6.style.cursor = "auto";
    btn4.style.cursor = "pointer";

    btn4.addEventListener("mouseover", () =>{
        btn4.style.backgroundColor = "gray";
        btn4.style.transition = "0.6s";
        btn4.style.transform= "250s";
    })
    btn4.addEventListener("mouseleave", () =>{
        btn4.style.backgroundColor = "white";
    })

    btn5.style.cursor = "pointer";
    btn5.addEventListener("mouseover", () =>{
        btn5.style.backgroundColor = "gray";
        btn5.style.transition = "0.6s";
        btn5.style.transform= "250s";
    })
    btn5.addEventListener("mouseleave", () =>{
        btn5.style.backgroundColor = "white";
    })

    if (mediaQuery1.matches) {
        // Then trigger an alert
        switch4.style.marginTop = "0";
    }
})


