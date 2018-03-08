const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

// Start database using file-async storage
const db = low('db.json', {
    storage: fileAsync
})

// Init
db.defaults({
    users: []
}).value()

const users = db.get('users')

app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {
    console.log('Client connected.');

    client.on('disconnect', function() {

        var user = users.find({ clientId: client.id }).value();

        if (user != undefined) {

            users.find({ facebookId: user.facebookId })
                .assign({ online: false })
                .value();

            user.online = false;
            client.emit('join', users);
            client.broadcast.emit('join', users);
        }
    });

    client.on('users', function(data) {

        if (users.find({ facebookId: data.facebookId }).value() == undefined) {
            let user = data;
            user.clientId = client.id;
            user.online = true;
            users.push(user).value();
        } else {
            users.find({ facebookId: data.facebookId })
                .assign({ online: true, clientId: client.id })
                .value();
        }

        client.emit('join', users);
        client.broadcast.emit('join', users);

    });

    client.on('messages', function(data) {
        client.emit('broad', data);
        client.broadcast.emit('broad', data);
    });
});

server.listen(3000);
