const express = require('express')
require('dotenv').config()
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
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
        this.app.get('/api', (req, res) => {
            res.json(
                {
                    msg: 'GET API'
                }
            )
        })
        this.app.put('/api', (req, res) => {
            res.json(
                {
                    msg: 'PUT API'
                }
            )
        })
        this.app.post('/api', (req, res) => {
            res.json(
                {
                    msg: 'POST API'
                }
            )
        })
        this.app.delete('/api', (req, res) => {
            res.json(
                {
                    msg: 'DELETE API'
                }
            )
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;