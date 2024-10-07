const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const SerialPort = require('serialport');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuração da porta serial
const port = new SerialPort({
  path: 'COM3', // Altere para a porta correta
  baudRate: 9600,
});

// Serve arquivos estáticos do diretório "public"
app.use(express.static('public'));

// Rota básica
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Lógica para ler dados do Arduino
port.on('open', () => {
  console.log('Porta serial aberta');
  port.on('data', (data) => {
    // Enviar dados para o cliente
    io.emit('sensorData', data.toString());
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
