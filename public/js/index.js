var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'sarah@example.com',
    text: 'Hello, this is Sarah'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function ({ from, text, createdAt }) {
  console.log({ from, text, createdAt });
});