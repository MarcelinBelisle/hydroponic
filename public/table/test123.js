

var tbody = document.getElementById('settingth');

function AddItemToTable(){


    let trow = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");
    let th7 = document.createElement("th");
    let th8 = document.createElement("th");
    let th9 = document.createElement("th");
    let th10 = document.createElement("th");
    let th11 = document.createElement("th");
    let th12 = document.createElement("th");
    let th13 = document.createElement("th");


    th1.innerHTML="Growing stage";
    th2.innerHTML=" Start stage";
    th3.innerHTML="End stage";
    th4.innerHTML="Indoor/Outdoor";
    th5.innerHTML="Small description";
    th6.innerHTML="Humidity";
    th7.innerHTML="Temperature";
    th8.innerHTML="Co2";
    th9.innerHTML="Light time";
    th10.innerHTML="Light PPFD";
    th11.innerHTML="Light DLI";
    th12.innerHTML="pH";
    th13.innerHTML="PPM";

    trow.appendChild(th1);
    trow.appendChild(th2);
    trow.appendChild(th3);
    trow.appendChild(th4);
    trow.appendChild(th5);
    trow.appendChild(th6);
    trow.appendChild(th7);
    trow.appendChild(th8);
    trow.appendChild(th9);
    trow.appendChild(th10);
    trow.appendChild(th11);
    trow.appendChild(th12);
    trow.appendChild(th13);


    tbody.appendChild(trow);
    }

    window.onload = AddItemToTable();

