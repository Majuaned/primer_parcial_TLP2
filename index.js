const express = require('express');
require('dotenv').config();

const app = express();

const puerto = process.env.PORT || 3000

const routers = require('./src/routes/routes.home')

app.use(express.json());

app.use(routers);

app.listen(puerto, ()=>{
    console.log(`Servidor iniciado en el puerto: ${puerto}`);
})
//