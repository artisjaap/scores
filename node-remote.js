const net = require('net');
const WebSocket = require('ws');

const LIRC_SOCKET = '/var/run/lirc/lircd';
const WS_URL = 'ws://localhost:3000';

// WebSocket client
const ws = new WebSocket(WS_URL);

ws.on('open', () => {
    console.log('WebSocket verbonden');
});

ws.on('error', (err) => {
    console.error('WebSocket fout:', err);
});

// LIRC client
const lirc = net.createConnection(LIRC_SOCKET);

lirc.on('connect', () => {
    console.log('Verbonden met LIRC');
});

lirc.on('data', (data) => {
    const lines = data.toString().trim().split('\n');

    lines.forEach(line => {
        const [hex, repeat, key, remote] = line.split(' ');

        // alleen eerste keypress
        if (key === 'KEY_1' && repeat === '00') {
            const payload = JSON.stringify({ message: 'pot red' });

            if (ws.readyState === WebSocket.OPEN) {
                ws.send(payload);
                console.log('Verzonden via WS:', payload);
            } else {
                console.warn('WebSocket nog niet open');
            }
        }
    });
});

lirc.on('error', console.error);
