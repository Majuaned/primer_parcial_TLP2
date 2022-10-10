const express = require('express');
require('dotenv').config();

const app = express();

const puerto = process.env.PORT || 3000

app.listen(puerto, ()=>{
    console.log(`Servidor iniciado en el puerto: ${puerto}`);
})
//