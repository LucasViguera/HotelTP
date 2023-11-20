//se deberia utilizar en la seccion de consultar reserva, faltaria el codigo para mostrar los datos obtenidos de la misma

const { Reserva } = require('./server/models'); 

Reserva.findOne({
  where: {
    nroAleatorio: 123123, // El valor deberia ser enviado como variable desde la reserva.
  },
})
  .then((Reserva) => {
    if (Reserva) {
      console.log('Reserva encontrada:', Reserva.toJSON());
    } else {
      console.log('Reserva no encontrada.');
    }
  })
  .catch((error) => {
    console.error('Error al buscar la reserva:', error);
  });
