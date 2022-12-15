const { Router } = require('express');
const productsRouter = require('./productsRoutes');
const normalizrRouter = require('./normalizRoute');
const login = require('./loginRouter');

const routerMain = Router();
 routerMain.use('/products', productsRouter);
routerMain.use('/normalizr',normalizrRouter);
routerMain.use('/login', login);

module.exports = routerMain;