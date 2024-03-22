const express = require('express');
const router = express.Router();
const recetasController = require('../controllers/recetasController');

/**Rutas para las recetas*/
router.get('/',recetasController.optenerRecetas);
router.get('/:idReceta',recetasController.optenerRecetasId);
router.post('/',recetasController.crearReceta);
router.put('/:idReceta', recetasController.actualizarReceta);
router.delete('/:idReceta',recetasController.eliminarReceta);

module.exports = router;