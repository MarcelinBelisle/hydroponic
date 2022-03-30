
var thInfo = document.getElementById('infoTh');

function AddItemToTableInfoTh(){

    let trow = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");
    let th7 = document.createElement("th");
    let th8 = document.createElement("th");

    th1.innerHTML="Number of plant";
    th2.innerHTML="Common name";
    th3.innerHTML="Plant name";
    th4.innerHTML="Seeds origin";
    th5.innerHTML="Starting date";
    th6.innerHTML="End date";
    th7.innerHTML="Harvest(kg)";
    th8.innerHTML="Status";
    

    trow.appendChild(th1);
    trow.appendChild(th2);
    trow.appendChild(th3);
    trow.appendChild(th4);
    trow.appendChild(th5);
    trow.appendChild(th6);
    trow.appendChild(th7);
    trow.appendChild(th8);

    thInfo.appendChild(trow);
    }

    window.onload = AddItemToTableInfoTh();