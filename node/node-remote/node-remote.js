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

        if(repeat === '00'){
            switch (key) {
                case 'KEY_RED': sendCommand('pot red'); break;
                case 'KEY_YELLOW': sendCommand('pot red'); break;
                case 'KEY_GREEN': sendCommand('pot red'); break;
                case 'KEY_BROWN': sendCommand('pot red'); break;
                case 'KEY_BLUE': sendCommand('pot red'); break;
                case 'KEY_PINK': sendCommand('pot red'); break;
                case 'KEY_BLACK': sendCommand('pot red'); break;
                case 'KEY_TURN_PLAYER': sendCommand('pot red'); break;
            }
        }

    });
});

lirc.on('error', console.error);

let sendCommand = function(command) {
    const payload = JSON.stringify({ message: command });

    if (ws.readyState === WebSocket.OPEN) {
        ws.send(payload);
        console.log('Verzonden via WS:', payload);
    } else {
        console.warn('WebSocket nog niet open');
    }
}