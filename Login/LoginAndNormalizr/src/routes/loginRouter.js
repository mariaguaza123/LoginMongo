const {Router} = require('express');
const login = Router();

const users = [
    {
        username: 'Mafe',
        password: '1208',
        admin: true
    }
]
//Inicia sesion
login.post('/',(req,res)=>{
    const { username, password } = req.body;

    const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);

    if (index < 0)
        res.status(404).json({ msg: 'Usuario no encontrado,registrese o verifique bien sus datos' });
    else {
        const user = users[index];

        req.session.info = {
            loggedIn: true,
            contador: 1,
            username: user.username,
            admin: user.admin,
        };
        res.json({ msg: `!Bienvenido ${user.username}¡` })
    }

})
//Verifica quien inicio sesion y cuenta las veces que ingreso

login.get('/checkLogin',(req, res)=>{
    if (req.session.info && req.session.info.loggedIn) {
        req.session.info.contador++;
        res.json({
            msg: `El usuario : ${req.session.info.username} ha ingresado ${req.session.info.contador} veces`,
        });
    } else {
        res.status(404).json({ msg: 'El usuario que usted busca no se ha logueado' });
    }

})

//Cierra sesion
login.post('/logOut',(req, res)=>{
    let username = req.session.info.username;
    req.session.destroy((err) => {
        res.json(`Gracias por visitarnos ${username}`);
    });

})


module.exports = login;