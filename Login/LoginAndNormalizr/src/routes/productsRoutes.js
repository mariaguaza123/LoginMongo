const {Router} = require('express');
const knex = require("../db/knex");
const productsRoute = Router();

//Trae toda la info de las tabla products
productsRoute.get('/', (req, res) => {
  const products = knex().select('*').from('products')
  products.then(function(data){
  res.json(data);
  })
});

//Guarda los datos en la base de datos
productsRoute.post('/',(req, res,next)=>{
  knex('products').insert(req.body)
  .then((result) => {
    res.status(200).json({
      status: 'success',
      message: 'Registrado correctamente'
    });
  })
  .catch((err) => {
    return next(err);
  });
});

//Actualiza los datos en la base de datos
productsRoute.put('/:id',(req, res,next)=>{
  const id = parseInt(req.params.id);
  knex('products').update(req.body).where('productid', id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          status: 'success',
          message: '¡Actualizado correctamente'
        });
      } else {
        res.status(404).json({
          status: 'error',
          message: '¡El registro no existe'
        });
      }
    })
    .catch((err) => {
      return next(err);
    });
});

//Elimina un producto

productsRoute.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('products').del().where('productid', id)
  .then((result) => {
    if (result) {
      res.status(200).json({
        status: 'success',
        message: 'El registro ha sido eliminado'
      });
    } else {
      res.status(400).json({
        status: 'error',
        message: '¡El registro no existe!'
      });
    }
  })
  .catch((err) => {
    return next(err);
  });
});



module.exports = productsRoute;