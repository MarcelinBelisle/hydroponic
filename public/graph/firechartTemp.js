

var dataArray2 = [];
const ctx2 = document.getElementById('myChartTempMean').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature Mean',
            data: dataArray2,
            fill: true,
            backgroundColor: 'rgb(120, 16, 126)',
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
const ctx = document.getElementById('myChartTemp').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperature',
            data: dataArray,
            fill: true,
            backgroundColor: 'rgb(120, 16, 126, 0.2)',
            borderWidth: 3,
            borderColor: 'rgb(120, 16, 126)',
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
            suggestedMin: 0,
            suggestedMax: 40,
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


var temp;
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
    

    async function GetTemp() {
    var ref = doc(db,"Tempvalue", "Temp");
    const docSnap = await getDoc(ref);
    var total = 0;
    var median = 0;

     if(docSnap.exists()){
        temp = docSnap.data().Temp;
        for (let i = 0; i < temp.length; i++) {
          total += parseFloat(temp[i]); 
          addData(myChart, temp[i]); 
        }
    
        var half = temp.length / 2;
        if (temp.length % 2 == 0){
          median = temp[(half-1)];
        }
        else{
          var half1 = parseInt(half - 0.5);
          var half2 = parseInt(half - 1.5);
           median = Number(temp[half1]) + Number(temp[half2]) / 2.0;
         }
        console.log(temp.length);
        console.log(temp[half-1]);
        console.log(half-1);
        console.log(median);
        var avg = total / temp.length;
        addDataMean(myChart2,'mean', avg); 
        addDataMean(myChart2, 'median', median); 
     }
}
                        


    window.onload = GetTemp();