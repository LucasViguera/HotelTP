// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./configBD');
//const clientesRouter = require('./ClienteRoutes');

const app = express();
app.use(cors());
app.use(express.json());

//app.use('/api', clientesRouter); No desarrollado todavia

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
});
