const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apiRecetasCocina'

});

connection.connect(err =>{
    if(err) throw err
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;