const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotel', 'root', '', {  //La 3era opcion es para la contraseña de la bd
  host: 'localhost', 
  dialect: 'mysql',
});

module.exports = sequelize;
