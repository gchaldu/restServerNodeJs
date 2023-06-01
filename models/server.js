const express = require('express')
require('dotenv').config()
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //rutas de mi app
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;