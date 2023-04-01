const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const insumos = new Schema ({
    prod: {
        type: String,
        required: true,
        unique: true
    },
    marca: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    stock: {
        type: Boolean,
        required: true
    },
    adicional: {
        type: String
    }
})

const Supplies = mongoose.model(`Supplies`, insumos);
module.exports = {Supplies}