const io = require('socket.io')();
const users = new Set();
const messages = [];

io.on('connection', function(socket){
    socket.on('join', function(name) {
      socket.broadcast.emit('newJoiner', `user ${name} is chatting now!`, name);
      users.add(name);
      socket.emit('allUsers', Array.from(users));
      socket.emit('allMessages', Array.from(messages));
    });

    socket.on('leave', function(name){
      socket.broadcast.emit('leave', name);
      users.delete(name);
    });

    socket.on('message', function(userName, message){
      socket.broadcast.emit('newMessage',userName, message);
      messages.push({userName, message});
    });
});

io.listen(3000);
console.log('listening on *:3000');
