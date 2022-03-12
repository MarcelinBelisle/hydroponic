
var tbody = document.getElementById('tbody1');

function AddItemToTable(number,nameLat,nameCom,seeds,start,end,status){
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");

    td1.innerHTML=number;
    td2.innerHTML=nameLat;
    td3.innerHTML=nameCom;
    td4.innerHTML=seeds;
    td5.innerHTML=start;
    td6.innerHTML=end;
    td7.innerHTML=status;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tbody.appendChild(trow);
    }

    function AddAllItemsToTable(ThePlant){
        tbody.innerHTML="";
        ThePlant.forEach(element => {
            AddItemToTable(element.NumberPlant, element.NameLatin, element.NameCommon, element.SeedsOrigin, element.StartDate, element.EndDate,element.Status);
        });
    }

  
 
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAScT_b2jdH7OV-jChxxIYmuIOtxOL0Tcs",
      authDomain: "hydro-closet.firebaseapp.com",
      databaseURL: "https://hydro-closet-default-rtdb.firebaseio.com",
      projectId: "hydro-closet",
      storageBucket: "hydro-closet.appspot.com",
      messagingSenderId: "419523459894",
      appId: "1:419523459894:web:dc18461c2637b7cb2f1197"
    };

    const app = initializeApp(firebaseConfig);
    import {getDatabase, ref, get, set, child, update, remove, onValue}
    from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

    const db = getDatabase();

    function GetAllDataRealtime(){

        const dbRef = ref(db,"PlantData");

        onValue(dbRef,(snapshot)=>{
            var plants= [];

            snapshot.forEach(childSnapshot => {
                plants.push(childSnapshot.val());
            });

            AddAllItemsToTable(plants);   
        })    
      
    }


    window.onload = GetAllDataRealtime();