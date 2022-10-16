// import mongoose from "mongoose";
const mongoose = require('mongoose')

const Cliente = mongoose.model('Cliente', {
    nome: String,
    email: String,
    dataNacimento: String,
    telefone: String,
    cpf: String,
    idade: Number,
    Pais: String,
    estado: String,
    cidade: String,
    bairro: String,
})

// export default Cliente
module.exports = Cliente