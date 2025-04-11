import { WebSocketServer } from 'ws';

const config = {
    port: process.env.PORT || 8080,
};

const wss = new WebSocketServer(config);

wss.on('connection', (connectionObj) => {
    console.log('new connection found !!!');

    // connectionObj.on('message', (data) => {
    //     console.log(`message received : ${data}`);
    //     connectionObj.send(data);
    // });

    // broadcast
    connectionObj.on('message', function message(data, isBinary) {
        console.log(`message received : ${data}`);
        wss.clients.forEach(function each(client) {
            if (client.readyState === connectionObj.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    connectionObj.on('close', () => {
        console.log(`connection closed`);
    });
});

wss.on('listening', () => {
    console.log('web socket listening...');
});

wss.on('error', (e) => {
    console.error('error occured :->', e);
});
