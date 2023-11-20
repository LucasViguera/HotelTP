
const { Cliente } = require('./server/models');

//cliente de ejemplo, hay que mandar los valores por variables desde la reserva 
Cliente.create({
    Email: 'correo@cliente.com',
    nombre: 'Nombre del Cliente',
    telefono: '1234567890',
    direccion: 'Dirección del Cliente',
  })
    .then((Cliente) => {
      console.log('Cliente creado:', Cliente.toJSON());
    })
    .catch((error) => {
      console.error('Error al crear el cliente:', error);
    });