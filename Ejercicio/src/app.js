const express = require('express');
const path =require('path');
const morgan = require('morgan');
const mysql= require('mysql');
const mustache =require('mustache');
const Conexion = require('express-myconnection');
const app = express();

//importando ruta
const routesPersona = require('./routes/persona');

//Config
app.set('port',process.env.PORT || 3000);
app.set('view engine','mustache');
app.set('views',path.join(__dirname,'vistas'));

//middlewares
app.use(morgan('dev'));
app.use(Conexion(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'basexd'
}, 'single'));
//routing
 app.use('/',routesPersona);

 //estaticos
 app.use(express.static(path.join(__dirname,'public')));
//server
app.listen(app.get('port'), ()=> {
    console.log('Console running on port 3000');
});

//POST
app.post('/add', (req, res) =>{

    console.log(parseInt(req.body.kilometros));
    if(parseInt(req.body.kilometros)>4){
     let sql = `INSERT INTO tablaxd(nombre,correo,km) VALUES('${req.body.nombre}','${req.body.correo}','${req.body.km}')`;
     connection.query(sql);
     res.render('index',{dato:'Todo correcto'});
 }else{
     res.render('index',{dato:'Necesita correr mas'});
     }
});

// GET
app.get('/', (req, res) =>{ 
    
    let sql="SELECT * FROM tablaxd";
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.render('index',{datos:result});
      });
   
});
