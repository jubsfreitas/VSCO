import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { SerialPort } from 'serialport';
import cors from 'cors'; // Adicione esta linha

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuração da porta serial
const port = new SerialPort({
  path: 'COM13', // Altere para a porta correta
  baudRate: 9600,
});

// Adiciona o middleware CORS
app.use(cors());

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
    console.log('Dados recebidos do Arduino:', data.toString()); // Log os dados recebidos
    // Enviar dados para o cliente
    io.emit('sensorData', data.toString());
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 5174;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
