const mongoose = require("mongoose");

const dbConnection=async()=>{

    try{
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('DB Online')

    }catch(error){
        console.log(error);
        throw new mongoose.Error('Error a la hora de inicializar la BD');
    }

}
module.exports={dbConnection}