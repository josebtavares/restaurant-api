const mongoose = require('mongoose');

const Drink = mongoose.model('bebidas',{
    name: String,
    categoria:String,
    descricao: String,
    preco:String,
    caloria:String
})

module.exports = Drink