const app = require(`./app`)
require(`dotenv`).config();
    
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`La base de datos esta levantada en servidor:  ${port}`)
})
