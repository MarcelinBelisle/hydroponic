


    var tbody = document.getElementById('tbody1');

    function AddItemToTable(pH){
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");


        td1.innerHTML=pH;
       

        trow.appendChild(td1);


        tbody.appendChild(trow);
        }

        function AddAllItemsToTable(TheStudent){
            tbody.innerHTML="";
            TheStudent.forEach(element => {
                AddItemToTable(element.pH);
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

            const dbRef = ref(db,"pHvalue");

            onValue(dbRef,(snapshot)=>{
                var students= [];

                snapshot.forEach(childSnapshot => {
                    students.push(childSnapshot.val());
                });

                AddAllItemsToTable(students);   

            })    
          
        }

        window.onload = GetAllDataRealtime;


        
    
