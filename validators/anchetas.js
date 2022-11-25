const { check } = require('express-validator')
const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    } catch (err){
        res.status(403)
        res.send({ errors: err.array() })
    }
}

const validateCreate = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('Descripcion')
        .exists()
        .not()
        .isEmpty(),
    check('Insumo')
        .exists()
        .not()
        .isEmpty(),
    check('Precio')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check('Disponible')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateResult }
module.exports = { validateCreate }