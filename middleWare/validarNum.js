const Supplies = require("../models/insumos")

module.exports = validarNum = async (req,res,next) => {
    try { 
    const item = await Supplies.findById(req.params.id);
    if (!item.isEmpty()) {
      return res.status(400).json({msg: "Error"});
    } else { 
    next();
    }
 }  catch(error) {
        res.status(501).json(error)
    }
}
