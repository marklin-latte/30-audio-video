var peer = new Peer('B', { host: 'localhost', port: 9000, path: '/api'});
const conn = peer.connect('A');

conn.on('open', (conn) => {
    console.log('fuck u');
    // conn.send('HELLO WORLD');
});