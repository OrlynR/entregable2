const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

//Inicializaciones
const app = express();
require('./db');

//herramientas
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

//routes
app.use('/api/movies', require('./routes/movies'))

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});