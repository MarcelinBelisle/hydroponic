
  
let counter2 = 0;
socket.on('arduino:data', function (dataSerial) {
 myChart2.data.labels.push(counter);
 myChart2.data.datasets.forEach(dataset => {
   dataset.data.push(dataSerial.value);
 });
 counter++;
 myChart2.update();
});

Chart.defaults.font.size = 20;
Chart.defaults.font.color = '#000';
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['TDS value'],
        datasets: [{
            label: 'TDS value',
            data: [],
            fill: true,
            backgroundColor: 'rgb(100, 55, 160)',
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