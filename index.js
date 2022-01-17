const express=require('express')
const cors=require('cors');
const path=require('path')
const { dbConnection } = require('./database/config');
require('dotenv').config();



//Crear el servidor
const app=express();

//Directorio Público
app.use(express.static('public'));

//Base de Datos
dbConnection()


//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth',require('./routes/auth'));

//Manejar demas rutas
app.get( '*',(req,res)=>{
    res.sendFile( path.resolve(__dirname,'public/index.html') )
})

app.listen(process.env.PORT,()=>{
    console.log('servidor corriendo en puerto '+process.env.PORT)
})