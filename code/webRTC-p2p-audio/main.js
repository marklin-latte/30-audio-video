
var peer = new Peer('A', {host: 'localhost', port: 9000, path: '/api'});

peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
});

peer.on('connection', (conn) => {
    conn.on('open', (data) => {
        var a = data;
        console.log('fuc u');
    });
    conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
    });
});

// peer.on('close', () => {
//     console.log('nnonooo !!!');
// })