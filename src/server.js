// Punto de entrada de la aplicacion
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const conectarBD = require('./config/db');
const rutasServicios = require('./routes/servicios');

const app = express();
const PUERTO = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/servicios', rutasServicios);

// Ruta de verificacion, util para la demostracion
app.get('/api/estado', (req, res) => {
  res.json({ estado: 'activo', fecha: new Date().toISOString() });
});

conectarBD().then(() => {
  app.listen(PUERTO, () => console.log('Servidor escuchando en el puerto ' + PUERTO));
});
