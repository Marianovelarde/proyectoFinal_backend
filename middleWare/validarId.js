const {Supplies} = require('../models/insumos')  

module.exports = validarId = async (req, res, next) => {
    try{
        const item = await Supplies.findById(req.params.id)
        if(item !== null) {
        next()
        } else {
                  return res.status(501).json({msg: "Id no valido"})
        }
    } catch(error) {
        res.status(501).json(error)
    }

}