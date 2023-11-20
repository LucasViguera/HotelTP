
const { Servicio } = require('./server/models');

//Servicio de ejemplo para entender como crearlos desde sequelize
Servicio.create({
    codServicio: '0023',
    desc_servicio: 'Descripcion del servicio',
    valorServicio: '500.00',
  })
    .then((Servicio) => {
      console.log('Serivcio creado:', Servicio.toJSON());
    })
    .catch((error) => {
      console.error('Error al crear servicio:', error);
    });