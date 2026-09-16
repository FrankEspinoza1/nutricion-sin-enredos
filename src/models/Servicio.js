// Modelo: define que campos tiene un servicio
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre:      { type: String, required: true, trim: true },
  descripcion: { type: String, default: '' },
  precio:      { type: Number, required: true, min: 0 },
  duracion:    { type: Number, required: true, min: 5 }   // en minutos
}, { timestamps: true });

module.exports = mongoose.model('Servicio', servicioSchema);
