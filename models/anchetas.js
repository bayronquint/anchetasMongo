const {Schema, model} = require('mongoose')

const Anchetas = Schema({
    nombre:{
        type: String
    },
    Descripcion:{
        type: String
    },
    Insumo:{
        type: String
    },
    Precio:{
        type: Number
    },
    Disponible:{
        type: String
    }
})

module.exports = model('anchetas',Anchetas)