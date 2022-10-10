//Creación de la variable contenedora de los controladores...
const ctrlHome = {};

ctrlHome.getHome = (req,res)=>{
    res.json('Funciona el GetHome')
}


//exportación de Vconte
module.exports = ctrlHome;