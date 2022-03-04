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

const com3 = new SerialPort("com6", {
  baudRate: 9600
});
const parser = com3.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
  console.log('connection is opened');
});


parser.on('data', function (data) {
  console.log(data)
  io.emit('arduino:data', {
    value: data.toString()
  });
  if ( data.charAt(0) == 'p' ) {
    io.emit('arduino:dataPH', {
      value: data.toString()
    });
  }
  else if ( data.charAt(0) == 'n' ) {
    io.emit('arduino:dataTDS', {
      value: data.toString()
    });
  }
  else if ( data.charAt(0) == 't' ) {
    io.emit('arduino:dataTemp', {
      value: data.toString()
    });
  }
  else if ( data.charAt(0) == 'h' ) {
    io.emit('arduino:dataHum', {
      value: data.toString()
    });
  }
  
});

parser.on('error', (err) => console.log(err));
com3.on('error', (err) => console.log(err));