const router = require('express').Router();
// aca debo asociar las rutas con sus respectivos controladores, para lo cual necesito llamar a Vconte y abrirlo, o más bien desestructurarlo...cargandolos en una variable vacía...
const {getHome}=require('../controllers/home.controllers');


router.get('/',getHome);




module.exports = router;