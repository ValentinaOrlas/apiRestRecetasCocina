const connection = require('../config/db');

/**Obtener todos los ingredientes*/
exports.optenerIngredientes = (req,res)=>{
    const query = 'SELECT * FROM Ingredientes';
    connection.query(query,(err,result)=>{
        if(err)throw err;
        res.json(result);
    });
};

/**Obtener ingredientes por id*/
exports.optenerIngredientesId = (req,res)=>{
    const idIngredientes = req.params.idIngredientes;
    const query = 'SELECT * FROM Ingredientes WHERE idIngredientes = ?'
    connection.query(query,[idIngredientes],(err,result)=>{
        if(err) console.log(err);
        res.json(result[0]);
    });
}

/**Crear ingredientes*/
exports.crearIngredientes = (req,res)=>{
    const {nombre,cantidad,unidadMedida, idReceta} = req.body;
    const query = 'INSERT INTO Ingredientes(nombre,cantidad,unidadMedida, idReceta) VALUES (?,?,?,?)'
    connection.query(query,[nombre,cantidad,unidadMedida, idReceta],(err,result)=>{
        if(err)throw err
        res.json({message: 'Ingrediente creado exitosamente'})
    });
};

/**Actualizar ingredientes*/
exports.actualizarIngredientes = (req,res)=>{
    const idIngredientes = req.params.idIngredientes;
    const {nombre,cantidad,unidadMedida, idReceta} = req.body;
    const query = 'UPDATE Ingredientes SET nombre=?, cantidad=?, unidadMedida=?, idReceta=? WHERE idIngredientes = ?';
    connection.query(query,[nombre,cantidad,unidadMedida, idReceta,idIngredientes],(err,result)=>{
        if(err)throw err;
        res.json({message: 'Ingrediente actualizado con éxito'});
    });
}

/**Eliminar ingrediente por id*/
exports.eliminarIngrediente = (req,res)=>{
    const idIngredientes = req.params.idIngredientes;
    const query = 'DELETE FROM Ingredientes WHERE idIngredientes=?';
    connection.query(query,[idIngredientes],(err,result)=>{
        if(err)throw err;
        res.json({message: 'Ingrediente eliminado con éxito'});
    });
};

