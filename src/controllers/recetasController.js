const connection = require('../config/db');

/**Optener todas las recetas*/
exports.optenerRecetas = (req,res)=>{
    const query = 'SELECT * FROM Recetas';
    connection.query(query, (err,results)=>{
        if(err) throw err;
        res.json(results);
    });
};

/**Obtener una receta por id*/
exports.optenerRecetasId = (req,res) =>{
    const idReceta = req.params.idReceta;
    console.log(idReceta);
    const query = 'SELECT * FROM Recetas WHERE idReceta = ?';
    connection.query(query,[idReceta],(err,result)=>{
        if(err) console.log(err);;
        res.json(result[0])
    });
};

/**Crear una nueva receta*/

exports.crearReceta = (req,res) =>{
    const {nombre, descripcion, tiempoPreparacion, dificultad, numPorciones, calorias} = req.body;
    const query = 'INSERT INTO Recetas(nombre, descripcion, tiempoPreparacion, dificultad, numPorciones, calorias) VALUES(?,?,?,?,?,?)'
    connection.query(query,[nombre, descripcion, tiempoPreparacion, dificultad, numPorciones, calorias],(err,result)=>{
        if(err) throw err;
        res.json({message: 'Receta creada exitosamente'});
    });
}

/**Actualizar producto por id*/
exports.actualizarReceta = (req,res)=>{
    const idReceta = req.params.idReceta;
    const {nombre, descripcion, tiempoPreparacion, dificultad, numPorciones, calorias} = req.body;
    const query = 'UPDATE Recetas SET nombre=?, descripcion = ?, tiempoPreparacion = ?, dificultad = ?, numPorciones =?, calorias = ? WHERE idReceta=?'
    connection.query(query,[nombre, descripcion, tiempoPreparacion, dificultad, numPorciones, calorias,idReceta],(err,result)=>{
        if(err)throw err;
        res.json({message: 'Receta actualizada con éxito'});
    });
}

/**Eliminar receta por id*/
exports.eliminarReceta = (req,res)=>{
    const idReceta = req.params.idReceta;
    const query = 'DELETE FROM Recetas WHERE idReceta=?'
    connection.query(query,[idReceta],(err,result)=>{
        if(err)throw err;
        res.json({ message: 'Receta eliminada exitosamente'})
    });
}



