const {check,body} = require('express-validator');

module.exports = [
    check('title')
    .notEmpty()
    .withMessage("Por favor ingrese el nombre de la película")
    .isLength({
        max : 50
    })
    .withMessage("El nombre no debe exceder los 50 caracteres"),

    check('rating')
    .notEmpty()
    .withMessage("Ingrese el valor de rating")
    .isDecimal()
    .withMessage("Los numeros deben ser decimales")
    .isLength({
        max : 3
    }).withMessage("el numero debe tener entre 1 y 2 digitos")
    ,

    check('length')
    .notEmpty()
    .withMessage("Ingrese la duración de la pelicula en minutos")
    .isLength({
        min:2,
        max : 3
    }).withMessage("La duración no debe tener mas de 3 digitos")
    .isInt({
        gt:1
    })
    .withMessage("el número debe ser positivo"),

    check('awards')
    .notEmpty()
    .withMessage("Ingrese el valor de awards")
    .isInt({
        gt:1
    })
    .withMessage("el número debe ser positivo"),

    check('release_date')
    .notEmpty()
    .withMessage("Ingrese la fecha")
    
]