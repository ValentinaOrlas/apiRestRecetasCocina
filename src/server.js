const express = require('express');
const app = express();
const morgan = require('morgan');

/**Configuración*/
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

app.use(morgan('dev'));
app.use(express.json());

/**Importar rutas*/
app.use('/recetas',require('./routes/recetasRutas'));

app.listen(app.get('port'), ()=> console.log(`Servidor esuchado en ${app.get('port')}`));