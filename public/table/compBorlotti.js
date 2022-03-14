
var thComp = document.getElementById('compThBorlotti');

function AddItemToTable1(){

    let trow = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");

    th1.innerHTML="Component";
    th2.innerHTML="Model";

    trow.appendChild(th1);
    trow.appendChild(th2);

    thComp.appendChild(trow);
    }

var tdComp = document.getElementById('compTdBorlotti');

function AddItemToTable(comp,model){

    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerHTML=comp;
    td2.innerHTML=model;
 
    trow.appendChild(td1);
    trow.appendChild(td2);

    tdComp.appendChild(trow);
    }

    function AddAllItemsToTable(ThePlant){
        tdComp.innerHTML="";
        ThePlant.forEach(element => {
            AddItemToTable(element.Component, element.Model);
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


    async function GetDocument() {
        const dbRef = collection(db,"CompBorlottiBean");

         var refFlower = doc(db,"CompBorlottiBean", "Peristaltic");
         const docRef = await setDoc(
           refFlower, {
            Component: "Peristaltic pump",
            Model: "4x 12V INTLLAB 5 ~ 100 ml/min"
           }
         )
         /*
<h1>Components List</h1>

  <th>Component</th>
  <th>Model</th>

   <td>Humidity</td>
   <td>DHT11</td>

   <td>Temperature</td>
   <td>DHT11</td>

    <td>Light</td>
    <td>MAXSISUN MF1000</td>

    <td>Microcontroller</td>
    <td>Arduino uno</td>

    <td>Water pump</td>
    <td>grege</td>

    <td>Peristaltic pump</td>
    <td>4x 12v xx</td>
*/

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
   