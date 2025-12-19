const net = require('net');
const WebSocket = require('ws');

const LIRC_SOCKET = '/var/run/lirc/lircd';
const WS_URL = 'ws://localhost:3000';

let ws = null;
let reconnectTimeout = null;
let retryDelay = 2000;       // start met 2s
const MAX_RETRY_DELAY = 30000;

/**
 * WebSocket connect + reconnect
 */
function connectWebSocket() {
    console.log('WebSocket: verbinden...');

    ws = new WebSocket(WS_URL);

    ws.on('open', () => {
        console.log('WebSocket verbonden');
        retryDelay = 2000; // reset backoff
    });

    ws.on('close', () => {
        console.warn('WebSocket gesloten, opnieuw verbinden...');
        scheduleReconnect();
    });

    ws.on('error', (err) => {
        console.error('WebSocket fout:', err.message);
        // error wordt meestal gevolgd door close
    });
}

function scheduleReconnect() {
    if (reconnectTimeout) return;

    reconnectTimeout = setTimeout(() => {
        reconnectTimeout = null;
        retryDelay = Math.min(retryDelay * 1.5, MAX_RETRY_DELAY);
        connectWebSocket();
    }, retryDelay);
}

// Start WS
connectWebSocket();

const lirc = net.createConnection(LIRC_SOCKET);

lirc.on('connect', () => {
    console.log('Verbonden met LIRC');
});

lirc.on('data', (data) => {
    const lines = data.toString().trim().split('\n');

    lines.forEach(line => {
        const [hex, repeat, key, remote] = line.split(' ');

        if (repeat === '00') {
            switch (key) {
                case 'KEY_1':        sendCommand('pot red'); break;
                case 'KEY_2':        sendCommand('pot yellow'); break;
                case 'KEY_3':        sendCommand('pot green'); break;
                case 'KEY_4':        sendCommand('pot brown'); break;
                case 'KEY_5':        sendCommand('pot blue'); break;
                case 'KEY_6':        sendCommand('pot pink'); break;
                case 'KEY_7':        sendCommand('pot black'); break;
                case 'KEY_0':        sendCommand('turn player'); break;
                case 'KEY_B':        sendCommand('new game'); break;
                case 'KEY_HOME':     sendCommand('mode normal'); break;
                case 'KEY_PREVIOUS': sendCommand('mode fault'); break;
                case 'KEY_PLAY':     sendCommand('mode negative correction'); break;
                case 'KEY_PAUSE':    sendCommand('mode positive correction'); break;
                case 'KEY_NEXT':     sendCommand('mode change'); break;
                case 'KEY_TEXT':     sendCommand('toggle remote'); break;
                case 'KEY_EXIT':     sendCommand('restart'); break;
            }
        }
    });
});

lirc.on('error', console.error);

function sendCommand(command) {
    const payload = JSON.stringify({ message: command });

    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(payload);
        console.log('Verzonden via WS:', payload);
    } else {
        console.warn('WebSocket niet verbonden, command genegeerd:', command);
    }
}