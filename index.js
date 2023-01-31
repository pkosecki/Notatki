const express = require('express');
const app = express();
const { port } = require('./config')
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

//db
require('./db/mongoose');

// parser
app.use(bodyParser.json());

//cors
app.use(cors());

//route
app.use('/api/', apiRouter);

//serwer
app.listen(port, function() {
    console.log('Serwer słucha... http://localhost:3000');
});