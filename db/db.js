

const mongoose = require (`mongoose`);
require(`dotenv`).config();


const connect = async () => {
    try {
        await mongoose.connect (process.env.MONGO_CONNECT)
        console.log(`base de datos conectada`)
    } catch {
        console.log(`problemas al conectar con la base de datos`)
    }
}




module.exports = {connect}