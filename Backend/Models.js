
// models/Cliente.js
const Sequelize = require('sequelize');
const sequelize = require('../configBD');



const Cliente = sequelize.define('Cliente', {
    Email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  });
  
  // Modelo de la tabla tipohabitaciones
  const TipoHabitacion = sequelize.define('TipoHabitacion', {
    codTipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    desc_tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  // Modelo de la tabla Servicios
  const Servicio = sequelize.define('Servicio', {
    codServicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    desc_servicio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valorServicio: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });
  
  // Modelo de la tabla habitaciones
  const Habitacion = sequelize.define('Habitacion', {
    codTipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nrohabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nropiso: {
      type: DataTypes.INTEGER,
    },
  });
  
  // Modelo de la tabla reserva
  const Reserva = sequelize.define('Reserva', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nroAleatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codTipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nroHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
    },
    cantDias: {
      type: DataTypes.INTEGER,
    },
    fec_ini: {
      type: DataTypes.DATE,
    },
    fec_fin: {
      type: DataTypes.DATE,
    },
  });
  
  // Modelo de la tabla servicios_reserva
  const ServicioReserva = sequelize.define('ServicioReserva', {
    codServicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nroAleatorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codTipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nroHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  //relaciones entre los modelos
  Cliente.hasMany(Reserva, { foreignKey: 'email' });
  Reserva.belongsTo(Cliente, { foreignKey: 'email' });
  Reserva.belongsTo(Habitacion, { foreignKey: 'codTipo', targetKey: 'codTipo', as: 'TipoHabitacion' });
  ServicioReserva.belongsTo(Reserva, { foreignKey: 'email', targetKey: 'email' });
  ServicioReserva.belongsTo(Reserva, { foreignKey: 'nroAleatorio', targetKey: 'nroAleatorio' });
  ServicioReserva.belongsTo(Reserva, { foreignKey: 'codTipo', targetKey: 'codTipo' });
  ServicioReserva.belongsTo(Reserva, { foreignKey: 'nroHabitacion', targetKey: 'nroHabitacion' });
  
  module.exports = {
    Cliente,
    TipoHabitacion,
    Servicio,
    Habitacion,
    Reserva,
    ServicioReserva,
  };