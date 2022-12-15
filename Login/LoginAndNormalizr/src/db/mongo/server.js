const express = require('express');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const routerMain = require('../../routes/index');
const cookieParser = require('cookie-parser');

const time = 5000;

const StoreOptions = {
  store: mongoStore.create({
    mongoUrl: 'mongodb+srv://root:mafe@cluster0.3ntoz7i.mongodb.net/myeccomerce?retryWrites=true&w=majority',
  }),
  secret: 'secretString', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: time * 1000,
  },
};

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(StoreOptions));
app.use('/api', routerMain);

module.exports = app; 