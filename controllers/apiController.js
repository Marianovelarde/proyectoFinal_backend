
const {Supplies} = require(`../models/insumos`)
const {validationResult} = require("express-validator")
const axios = require('axios');


module.exports = {


async lista (req,res) {             
    const items = await Supplies.find();
    res.json({items})
},


async listaUnica (req,res) {
    const item = await Supplies.findById(req.params.id);
    res.json({item})
},


async rickMorty (req,res) {
try {
    const response =  await axios.get('https://rickandmortyapi.com/api/character')
    const characters = response.data.results
    res.status(200).json(characters)
} catch (error) {
    console.error(error)
    res.status(500).send('error al obtener los personajes de Rick And Morty')
}
},


async crear(req,res){
    try {
        const errors = validationResult(req)
        if(errors.isEmpty()) { 
        const item = new Supplies (req.body);
        await item.save();
        res.status(201).json(item)
        }   else {
            res.status(400).json({errors: errors.array()})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }  
},


    async editar (req,res) {
    try {
        const err = validationResult(req)
        const updatedProduct = await Supplies.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(updatedProduct !== null) { 
        res.status(201).json({msg: "Producto Actualizado - " + req.params.id})
        }
        else {
            res.status(501).json({msg: "El ID del producto no existe en la base de datos"});
        }
    } catch (error) {
        res.status(501).json(error)
    }
},


    async eliminar (req,res) {
        await Supplies.findByIdAndDelete(req.params.id)
        res.json({
            msg: "Producto eliminado con exito"
        })
    },
    
}
