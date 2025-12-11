'use strict';
var express = require('express');
var path    = require('path');
const WebSocket = require('ws');
const http = require('http');

var app     = express();
const PORT = process.env.PORT || 3000;

// ----------------------------------------------------
// A. EXPRESS CONFIGURATIE & MIDDLEWARE
// ----------------------------------------------------

// Middleware om JSON-body's te parsen (ZEER BELANGRIJK voor POST)
app.use(express.json());

const angularDistPath = path.join(__dirname, 'browser');

// 1. Statische bestanden (Angular Build)
app.use(express.static(angularDistPath));

// De rest van je Express API-code
app.get('/hello', function (req, res) {
    res.send('hello');
});

// ----------------------------------------------------
// B. HUIDIGE SERVER EN WEBSOCKET SETUP
// ----------------------------------------------------

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const clients = new Set(); // De set met geconnecteerde clients

wss.on('connection', (ws) => {
    // ... (Je bestaande connection logica: clients.add(ws), message handlers, close handlers)

    clients.add(ws);
    // ... rest van connection en message handlers
    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Received:', parsedMessage);

            // Broadcast the message to all connected clients
            clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        ...parsedMessage,
                        timestamp: new Date().toISOString()
                    }));
                }
            });
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });
});

// ----------------------------------------------------
// C. NIEUW ENDPOINT OM TE BROADCASTEN
// ----------------------------------------------------

app.post('/message', (req, res) => {
    // Haal het bericht op uit de body van het request
    const message = req.body.content || 'Bericht zonder inhoud';
    const sender = 'HTTP-API';

    console.log(`HTTP POST received: "${message}"`);

    // Bereid het JSON-bericht voor dat naar de clients gestuurd wordt
    const broadcastPayload = JSON.stringify({
        type: 'api_broadcast',
        sender: sender,
        message: message,
        timestamp: new Date().toISOString()
    });

    // Loop door alle clients en verstuur het bericht
    clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(broadcastPayload);
        }
    });

    // Stuur een bevestiging terug naar de client die het HTTP-request stuurde
    res.status(200).json({
        status: 'ok',
        message: 'Bericht succesvol naar alle websockets verstuurd.',
        clients: clients.size
    });
});


// 3. Angular Fallback Routing (MOET onderaan de API routes staan)
app.get('*', (req, res) => {
    res.sendFile(path.join(angularDistPath, 'index.html'));
});

// ----------------------------------------------------
// D. START DE SERVER
// ----------------------------------------------------
server.listen(PORT, () => {
    console.log(`Express en WebSocket server running on http://localhost:${PORT}`);
});

// ... (Rest van je error handling en graceful shutdown code)