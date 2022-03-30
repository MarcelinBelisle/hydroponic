
var dataArray2 = [];
const ctx2 = document.getElementById('myChartCO2Mean').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'CO2 Mean',
            data: dataArray2,
            fill: true,
            backgroundColor: 'rgb(255, 255, 255)',
            borderWidth: 1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: "yellow",
      pointBorderColor: 'rgb(0, 0, 0)'

        }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels:{
          color: 'yellow',
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

Chart.defaults.font.size = 16;
Chart.defaults.defaultFontColor = 'red';
var dataArray = [];
const ctx = document.getElementById('myChartCO2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'CO2 value',
            data: dataArray,
            fill: true,
            backgroundColor: 'rgb(255, 255, 255, 0.2)',
            borderWidth: 3,
            borderColor: 'rgb(255, 255, 255)',
            pointStyle: 'circle',
            pointRadius: 0,
            pointBackgroundColor: "yellow",
            pointBorderColor: "yellow",
        }]
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels:{
          color: 'yellow',
          anchor: 'end'
        }
      },  
    scales: {
        y: {
            beginAtZero: true,
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
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion, Timestamp}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const db = getFirestore();

var yoyo = Timestamp;
console.log(yoyo);

var co2;
let counter = 0;

 function addData(chart, label, dataArray) {
    chart.data.labels.push(label);
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
      
    async function GetCO2() {
    var ref = doc(db,"CO2value", "CO2");
    const docSnap = await getDoc(ref);
    var total = 0;
    var median = 0;

     if(docSnap.exists()){
        co2 = docSnap.data().CO2;
        for (let i = 0; i < co2.length; i++) {
          total += parseFloat(co2[i]); 
          addData(myChart, Date.now(), co2[i]); 
        }
   
        var half = co2.length / 2;
        if (co2.length % 2 == 0){
          median = co2[(half-1)];
        }
        else{
         var half1 = parseInt(half - 0.5);
         var half2 = parseInt(half - 1.5);
          median = Number(co2[half1]) + Number(co2[half2]) / 2.0;
        }
        var avg = total / (co2.length * 1.00);
        addDataMean(myChart2,'mean', avg); 
        addDataMean(myChart2, 'median', median); 
     }
    
}


    window.onload = GetCO2();