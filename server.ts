import express from 'express';
import WebSocket from 'ws';
import { getRandomParagraph } from './words';

const app = express();
const server = app.listen(5000, () => {
  console.log('WebSocket server running on port 5000');
});

const wss = new WebSocket.Server({ server });

let currentParagraph: string | null = null;

function sendParagraphToClients() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'paragraph', data: currentParagraph }));
    }
  });
}

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('A client connected');

  if (!currentParagraph) {
    currentParagraph = getRandomParagraph();
    sendParagraphToClients();
  }

  ws.on('message', (message: string) => {
    console.log('Received message:', message);
    // Handle incoming messages from clients if needed
  });

  ws.on('close', () => {
    console.log('A client disconnected');
  });
});
