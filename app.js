const colors = require('colors');
const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
const morgan = require('morgan');
const { sequelize } = require('./models');
const logMiddleware = require('./middleware/log.middleware');
const cors = require("cors");

//Config Cors Options
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  
  
  
  const PORT =3000;
  
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(morgan('dev'));
app.use(logMiddleware)






app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgGreen.red);

    sequelize.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});