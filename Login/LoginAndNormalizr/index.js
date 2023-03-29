const server = require('./src/services/server');
const port = process.env.PORT || 3001;

server.listen(puerto, () =>{
console.log(`Servidor listo escuchando en el puerto ${puerto}`);
});
