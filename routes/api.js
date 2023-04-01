const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
const validarId = require("../middleWare/validarId")
const {check} = require("express-validator")
const validarNum = require("../middleWare/validarNum")

// const validarString = require("../middleWare/validarString")



router.get(`/ver`, apiController.lista)
router.get(`/ver/:id` ,validarId ,apiController.listaUnica)
router.get(`/apiExterna`, apiController.rickMorty)

router.post(`/crear`, [ 
check('prod').isString().withMessage('El producto debe ser una cadena de texto'),
check('marca').not().isEmpty().withMessage('Este campo "marca" es OBLIGATORIO'),
check('precio').isNumeric().withMessage('El precio debe ser numérico').isInt({ min: 1 }),
check('codigo').isNumeric().withMessage('El código debe ser numérico').isInt({ min: 1 }).withMessage('El código debe ser mayor que 0'),
check('stock').not().isEmpty().withMessage('Este campo "stock" es OBLIGATORIO'),
check('adicional').not().isEmpty().withMessage('Este campo "adicional" es OBLIGATORIO')
], apiController.crear)


router.put('/editar/:id', [ 
    check('prod').isString().withMessage('El producto debe ser una cadena de texto'),
    check('marca').not().isEmpty().withMessage('Para poder editar, el campo MARCA es OBLIGATORIO'),
    check('precio').isNumeric().withMessage('El precio debe ser numérico').isInt({ min: 1 }),
   check('codigo').isNumeric().withMessage('El código debe ser numérico').isInt({ min: 1 }).withMessage('El código debe ser mayor que 0'),
    check('stock').not().isEmpty().withMessage('Para poder editar, el campo STOCK es OBLIGATORIO'),
    check('adicional').not().isEmpty().withMessage('Para poder editar, el campo ADICIONAL es OBLIGATORIO')
    ],validarId,validarNum, apiController.editar)


router.delete('/borrar/:id',validarId,apiController.eliminar)





module.exports = router