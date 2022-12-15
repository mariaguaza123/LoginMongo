const faker = require('faker');
const fs = require('fs');


function generateProducts(){

    let products = [];

    for (let i = 0 ; i < 10; i++){
        const id = faker.random.uuid();
        const nameProduct = faker.commerce.productName();
        const price = faker.commerce.price(100, 100);
        const stock = faker.random.number();
        const idBrand = faker.random.uuid();
        const brandName = faker.company.companyName();
        const idTalla = faker.random.uuid();
        const tallaDesc = faker.company.bsBuzz();
        products.push({
            id: id,
            nameProduct : nameProduct,
            price : price,
            stock: stock,
            brand :{
                id: idBrand,
                brandName : brandName,            
            },
            sizes: [
                {
                    id: idTalla,
                    talla : tallaDesc
                },
                {
                    id: idTalla,
                    talla : tallaDesc
                },
                {
                    id: idTalla,
                    talla : tallaDesc
                }
            ]
        })
    }
    
    return {data : products}
}

const dataProducts = generateProducts();
fs.writeFileSync('dataFaker.json', JSON.stringify(dataProducts,null,"\t"));