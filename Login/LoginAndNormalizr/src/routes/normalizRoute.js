const {Router} = require('express');
const normalizrProducts = Router();
const fs = require('fs');
const path = require('path');
// import { normalize,schema } from 'normalizr';
 const {normalize, schema} = require('normalizr') ;

const filePath = path.resolve(__dirname,"../../dataFaker.json");
console.log(filePath);

//Devuelve la lista de productos original
normalizrProducts.get('/',(req, res) =>{
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.json({
        data
    })
});

//Devuelve la lista de productos nomalizr
normalizrProducts.get('/hola',(req, res) =>{
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const product = new schema.Entity('products', {}, {
        idProduct: 'id'
      });
    
      const brand = new schema.Entity('brand', {
        brand: product
      });

      const sizes = new schema.Entity('size', {
        size: product
      });
    
      const listProducts = new schema.Entity('listProducts', {
        nameProduct: product,
        size :[sizes],
        brands: [brand]
      }) 
    
      const finalSchema = [listProducts]
      const normalizedData = normalize(data, finalSchema)
    
      res.json({
        normalizedData
      });

      fs.writeFileSync('dataNormalized.json', JSON.stringify(normalizedData,null,"\t"));
      
});



module.exports = normalizrProducts;