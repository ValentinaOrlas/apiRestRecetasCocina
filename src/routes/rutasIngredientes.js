const express = require('express');
const router = express.Router();
const ingredientesController = require('../controllers/ingredientesController');

router.get('/', ingredientesController.optenerIngredientes);
router.get('/:idIngredientes', ingredientesController.optenerIngredientesId);
router.post('/',ingredientesController.crearIngredientes);
router.put('/:idIngredientes',ingredientesController.actualizarIngredientes);
router.delete('/:idIngredientes',ingredientesController.eliminarIngrediente);

module.exports= router;