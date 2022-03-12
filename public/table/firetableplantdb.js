

var tbody1 = document.getElementById('settingth');

function AddItemToTable1(){


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
    th2.innerHTML="Start stage";
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


    tbody1.appendChild(trow);
    }

   


var tbody = document.getElementById('tbody2');

function AddItemToTable(gStage,startStage,endStage,inOut,desc,humidity,temperature,co2,lTime,PPFD,DLI,ph,PPM){

    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");
    let td10 = document.createElement("td");
    let td11 = document.createElement("td");
    let td12 = document.createElement("td");
    let td13 = document.createElement("td");


    td1.innerHTML=gStage;
    td2.innerHTML=startStage;
    td3.innerHTML=endStage;
    td4.innerHTML=inOut;
    td5.innerHTML=desc;
    td6.innerHTML=humidity;
    td7.innerHTML=temperature;
    td8.innerHTML=co2;
    td9.innerHTML=lTime;
    td10.innerHTML=PPFD;
    td11.innerHTML=DLI;
    td12.innerHTML=ph;
    td13.innerHTML=PPM;


  

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    
    
    tbody.appendChild(trow);
    }

    function AddAllItemsToTable(ThePlant){
        tbody.innerHTML="";
        ThePlant.forEach(element => {
            AddItemToTable(element.GrowingStage, element.StartStage, element.EndStage, element.InOut, element.Desc, element.Humidity,
              element.Temperature, element.Co2, element.LightTime, element.LightPPFD, element.LightDLI, element.pH, element.PPM);
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

    var temp;
    async function GetDocument() {
        const dbRef = collection(db,"GrowBorlottiBean");

        var ref = doc(db,"Tempvalue", "Temp");
        const docSnap = await getDoc(ref);
        var bob = 0;
    
         if(docSnap.exists()){
            temp = docSnap.data().Temp;
            for (let i = 0; i < temp.length; i++) {
              bob += parseFloat(temp[i]); 
            }
            console.log(bob);
            var avg = bob / temp.length;
            console.log(avg);
         }
       
        onSnapshot(dbRef,(querySnapshot) => {
          var plants = [];


          querySnapshot.forEach(doc => {
            plants.push(doc.data());
          });
          AddAllItemsToTable(plants);
        })
    }

    window.onload = AddItemToTable1();
    window.onload = GetDocument();
   
