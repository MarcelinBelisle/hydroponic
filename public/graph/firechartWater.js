
var rest = 0;
var dataArray4 = [];
const ctx4 = document.getElementById('myChartWaterPercent').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: 'percentage dif',
            data: dataArray4,
            backgroundColor: 'rgb(0, 0, 255)',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            radius: 95,
            circumference: [],
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
      }
});



var dataArray3 = [];
const ctx3 = document.getElementById('myChartWaterDif').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['last val'+ 'aimed val'],
        datasets: [
          {
            label: 'dif',
            data: dataArray3,
            fill: true,
            backgroundColor: 'rgb(0, 0, 255)',
            borderWidth: 1,
      pointStyle: 'circle',
      pointRadius: 5,
      pointBackgroundColor: "yellow",
      pointBorderColor: 'rgb(0, 0, 0)',
        },
        {
          label: 'dif2',
          data: [1],
          fill: true,
          backgroundColor: 'rgb(73, 16, 30)',
          borderWidth: 1,
    pointStyle: 'circle',
    pointRadius: 5,
    pointBackgroundColor: "yellow",
    pointBorderColor: 'rgb(0, 0, 0)',
        }
      ]
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

var dataArray2 = [];
const ctx2 = document.getElementById('myChartWaterMean').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Water Mean',
            data: dataArray2,
            fill: true,
            backgroundColor: 'rgb(0, 0, 255)',
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

var dataArray = [];
const ctx = document.getElementById('myChartWater').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'WaterConsumption',
            data: dataArray,
            fill: true,
            backgroundColor: 'rgb(0, 0, 255, 0.2)',
            borderWidth: 3,
            borderColor: 'rgb(0, 0, 255)',
            pointStyle: 'circle',
            pointRadius: 0,
            pointBackgroundColor: "yellow",
            pointBorderColor: "yellow"

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
import {getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, arrayUnion}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const db = getFirestore();


var liters;
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
      
      function addDataDif(chart3, dataArray3) {
        chart3.data.datasets.forEach((dataset) => {
            dataset.data.push(dataArray3);
        });
        chart3.update();
        }

        function addDataPercent(chart4, label, circumference, dataArray4) {
          chart4.data.labels.push(label);  
          chart4.data.datasets.forEach((dataset) => {
              dataset.data.push(dataArray4);
              dataset.circumference.push(circumference);
          });
          chart4.update();
          }

        
          var percentage = 0;

    async function GetWater() {
    var ref = doc(db,"WaterConsumption", "Liters");
    const docSnap = await getDoc(ref);
    var total = 0;
    var median = 0;

     if(docSnap.exists()){
        liters = docSnap.data().Liters;
        for (let i = 0; i < liters.length; i++) {
          total += parseFloat(liters[i]); 
          addData(myChart, liters[i]); 
        }

        if(liters.slice(-1)[0] < 1){
          percentage = (liters.slice(-1)[0] * 100)/1;
          var percentageRound = (Math.round(percentage * 100) / 100).toFixed(2);
          rest = (percentage * 360) /100;
          addDataPercent(myChart4,'Precision',rest ,percentageRound);
      
          }
          else {
            percentage = (1 * 100)/liters.slice(-1)[0];
            var percentageRound = (Math.round(percentage * 100) / 100).toFixed(2);
            rest = (percentage * 360) /100;
            addDataPercent(myChart4,'Precision',rest ,percentageRound);
          }    
          addDataDif(myChart3, liters.slice(-1)[0]); 
  

        var half = liters.length / 2;
        if (liters.length % 2 == 0){
          median = liters[(half-1)];
        }
        else{
         var half1 = parseInt(half - 0.5);
         var half2 = parseInt(half - 1.5);
          median = Number(liters[half1]) + Number(liters[half2]) / 2.0;
        }
        var avg = total / (liters.length * 1.00);
        var avgRound = (Math.round(avg * 100) / 100).toFixed(2);
        var medianRound = (Math.round(median * 100) / 100).toFixed(2);
        addDataMean(myChart2,'mean', avgRound); 
        addDataMean(myChart2, 'median', medianRound); 
     }
}


    window.onload = GetWater();
  