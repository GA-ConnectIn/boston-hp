'use strict'
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env[2] || process.argv.PORT || 3000 ;
const homeRoute = require('./routes/home');
const findPriceRoute = require('./routes/find-price')


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));


app.use('/', homeRoute);







app.listen(PORT, ()=> {
  console.log("All port engines on ", PORT)
})
