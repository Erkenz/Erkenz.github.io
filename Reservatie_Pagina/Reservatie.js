let vandaag = new Date();
let dd = vandaag.getDate();
let mm = vandaag.getMonth()+1;
let yyyy = vandaag.getFullYear();
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}
vandaag = yyyy+'-'+mm+'-'+dd;
document.getElementById("begindatum").setAttribute("min", vandaag);
document.getElementById("einddatum").setAttribute("min", vandaag);

const Form = document.getElementById('formDatum');
Form.addEventListener('submit', handleLogin)


function handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const BeginDate = data.get('reservatie1');
    const EndDate = data.get('reservatie2');
    if(BeginDate <= EndDate)
    {
        loginPostRequest(EndDate, BeginDate);
    }
    else{
        alert("Foute datum");
    }
}


