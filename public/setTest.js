
const socket = io();
    Chart.defaults.font.size = 20;
    Chart.defaults.font.color = '#000';
    const ctx = document.getElementById('myChart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['pH value'],
            datasets: [{
                label: 'pH value',
                data: [],
                fill: true,
                backgroundColor: 'rgb(120, 16, 126)',
                borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBackgroundColor: "yellow",
          pointBorderColor: 'rgb(0, 0, 0)'
               
            }]
        },
        options: {            
                scales: {
                    y: {
                      beginAtZero: true,
                        }
                                  
                }
            },
        });
    
        
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
        
    const firebaseConfig = {
      apiKey: "AIzaSyAScT_b2jdH7OV-jChxxIYmuIOtxOL0Tcs",
      authDomain: "hydro-closet.firebaseapp.com",
      databaseURL: "https://hydro-closet-default-rtdb.firebaseio.com",
      projectId: "hydro-closet",
      storageBucket: "hydro-closet.appspot.com",
      messagingSenderId: "419523459894",
      appId: "1:419523459894:web:7b6d55c5af770e182f1197"
    };
    
    const app = initializeApp(firebaseConfig);
    
    import {getDatabase, ref, get, set, child, update, remove, onValue}
    from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
    
    const db = getDatabase();
    
    let counter = 0;
    
    socket.on('arduino:data', function (dataSerial) {
        myChart.data.labels.push(counter);
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.push(dataSerial.value);
            set(ref(db, "pHvalue/"),{
                pH: dataSerial.value
            });
        });
        counter++;
        myChart.update();
    });
        
