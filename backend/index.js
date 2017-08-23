const io = require('socket.io')();

io.on('connection', function(socket){
    socket.on('join', function(name) {
      socket.broadcast.emit('newJoiner', `user ${name} is chatting now!`);
    });

    socket.on('leave', function(name){
      socket.broadcast.emit('leave', `user ${name} is disconnected`);
    });

    socket.on('message', function(name, msg){
      socket.broadcast.emit('message', `${name}: ${msg}`);
    });
});

io.listen(3000);
console.log('listening on *:3000');
