//Se deberia utilizar para validar las habitaciones en la reserva.

const { Habitacion } = require('./server/models'); 

Habitacion.findOne({
  where: {
    codTipo: 1, // El valor del tipo de habitacion que se esta buscando, se deberia enviar desde reserva como variable.
  },
})
  .then((habitacion) => {
    if (habitacion) {
      console.log('Habitación encontrada:', habitacion.toJSON());
    } else {
      console.log('Habitación no encontrada.');
    }
  })
  .catch((error) => {
    console.error('Error al buscar habitación:', error);
  });
