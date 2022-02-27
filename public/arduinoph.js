
      const socket = io();

      let counter = 0;
      socket.on('arduino:data', function (dataSerial) {
       myChart.data.labels.push(counter);
       myChart.data.datasets.forEach(dataset => {
         dataset.data.push(dataSerial.value);
       });
       counter++;
       myChart.update();
      });

      Chart.defaults.font.size = 20;
      Chart.defaults.font.color = '#000';
      const ctx = document.getElementById('myChart1').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Temperature'],
              datasets: [{
                  label: 'Temperature',
                  data: [],
                  fill: true,
                  backgroundColor: 'rgb(160, 116, 196)',
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
