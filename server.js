const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = SocketIO(server);


app.use(express.static(__dirname + '/public'));
server.listen(3000, () => console.log('server on port 3000'));

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const com3 = new SerialPort("com3", {
  baudRate: 115200
});
const parser = com3.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
  console.log('connection is opened');
});


parser.on('data', function (data) {
  console.log(data)
  io.emit('data', data.toString());
});

parser.on('error', (err) => console.log(err));
com3.on('error', (err) => console.log(err));