var dataArray2 = [];
const ctx2 = document.getElementById('myChartpHMean').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'pH Mean',
            data: dataArray2,
            fill: true,
            backgroundColor: 'rgb(255, 255, 0)',
            borderWidth: 1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: "black",
      pointBorderColor: 'rgb(0, 0, 0)'

        }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels:{
          color: 'black',
          anchor: 'center'
        }
      },  
    scales: {
        y: {
          beginAtZero: true,
          }
        }
      }
});

var dataArray = [];
const ctx = document.getElementById('myChartpH').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'pH value',
            data: dataArray,
            fill: true,
            backgroundColor: 'rgb(255, 255, 0, 0.2)',
            borderWidth: 3,
            borderColor: 'rgb(255, 255, 0)',
            pointStyle: 'circle',
            pointRadius: 0,
            pointBackgroundColor: "black",
            pointBorderColor: "black"
        }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels:{
          color: 'black',
          anchor: 'end'
        }
      },  
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 14,
          }
        }
      }
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
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const db = getFirestore();


var ph;
let counter = 0;

 function addData(chart, dataArray) {
    chart.data.labels.push(counter);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(dataArray);
    });
    counter++;
    chart.update();
    }

    function addDataMean(chart2, label, dataArray2) {
      chart2.data.labels.push(label);
      chart2.data.datasets.forEach((dataset) => {
          dataset.data.push(dataArray2);
      });
      chart2.update();
      }   

    async function GetPH() {
    var ref = doc(db,"pHvalue", "pH");
    const docSnap = await getDoc(ref);
    var total = 0;
    var median = 0;

     if(docSnap.exists()){
        ph = docSnap.data().pH;
        for (let i = 0; i < ph.length; i++) {
          total += parseFloat(ph[i]); 
          addData(myChart, ph[i]); 
        }

        var half = ph.length / 2;
        if (ph.length % 2 == 0){
          median = ph[(half-1)];
        }
        else{
         var half1 = parseInt(half - 0.5);
         var half2 = parseInt(half - 1.5);
          median = Number(ph[half1]) + Number(ph[half2]) / 2.0;
        }
        var avg = total / (ph.length * 1.00);
        addDataMean(myChart2,'mean', avg); 
        addDataMean(myChart2, 'median', median); 
     }
}


    window.onload = GetPH();