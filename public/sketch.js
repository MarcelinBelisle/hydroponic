
const socket = io();


socket.on('arduino:data', function (data) {
  console.log(data);
  arduino.innerHTML +=data.value.substring(1) +"\n";
});