
var tdInfo = document.getElementById('infoTd');

function AddItemToTableInfoTd(nbPlant,cName,latin,seed,sDate,eDate,harvest,status){

    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");

    td1.innerHTML=nbPlant;
    td2.innerHTML=cName;
    td3.innerHTML=latin;
    td4.innerHTML=seed;
    td5.innerHTML=sDate;
    td6.innerHTML=eDate;
    td7.innerHTML=harvest;
    td8.innerHTML=status;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);

    tdInfo.appendChild(trow);
    }

    function AddAllItemsToTableInfoTd(TheInfo){
        tdInfo.innerHTML="";
        TheInfo.forEach(element => {
            AddItemToTableInfoTd(element.NbPlant, element.CommonName, element.LatinName, element.Seed, element.StartDate, element.EndDate, element.Harvest, element.Status);
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
    import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion, onSnapshot}
    from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
    
    const db = getFirestore();


    async function GetDocumentInfo() {
        const dbRef = collection(db,"PlantData");

         var refInfo = doc(db,"PlantData", "RomaineL");
         const docRef = await setDoc(
           refInfo, {
            NbPlant: "1",
            CommonName: "Romaine lettuce",
            LatinName: "Lactuca sativa",
            Seed: "W.H.Perron",
            StartDate: "30/03/22",
            EndDate: "Undefined",
            Harvest: "0",
            Status: "Ongoing"
           }
         )

        onSnapshot(dbRef,(querySnapshot) => {
           var infos = [];

          querySnapshot.forEach(doc => {
            infos.push(doc.data());
          });
          AddAllItemsToTableInfoTd(infos);
        })
    }

    window.onload = GetDocumentInfo();