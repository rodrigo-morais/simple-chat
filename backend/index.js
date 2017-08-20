var io = require('socket.io')();

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('message', function(msg){
      console.log('message: ' + msg);
    });
});

io.listen(3000);
console.log('listening on *:3000');
