var socket = io();

//Los on son para escuchar sucesos / informacion
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

//Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Maximiliano',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server',resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});