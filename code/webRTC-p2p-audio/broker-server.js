const express = require('express');
const app = express();
const expressPeerServer = require('peer').ExpressPeerServer;
const server = app.listen(9000);

const peerserver = expressPeerServer(server);

app.use('/api', peerserver);

app.get('/a', function(req, res){
    res.sendfile(__dirname + "/index-clientA.html");
});

app.get('/b', function(req, res){
    res.sendfile(__dirname + "/index-clientB.html");
});

peerserver.on('connection', (id) => {
    console.log(`A client connected : ${id}`);
})

peerserver.on('disconnect', (id) => {
    console.log(`A client say ~ bye bye : ${id}`);
});