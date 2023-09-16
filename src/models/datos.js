const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cliente = new Schema({
    nombre: String,
    apellido: String,
    telefono: String
});

module.exports = mongoose.model('datos', Cliente);