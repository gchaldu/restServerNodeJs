const {response, request} = require('express')

const usuariosGet = (req=request, res=response) => {

    const query = req.query;
    const {hola, apikey, user, limit=10, page=1} = req.query;

    res.json(
        {
            msg: 'GET API desde el controlador',
            query,
            hola,
            apikey,
            user,
            limit,
            page
        }
    )
}

const usuariosPut = (req=request, res=response) => {
    const id = req.params.id
    //const {id} = req.params;
    res.json(
        {
            msg: 'PUT API',
            id
        }
    )
}

const usuariosPost = (req=request, res=response) => {
    //const user = req.body;
    const {nombre, edad} = req.body;
    res.json(
        {
            msg: 'POST API',
            nombre,
            edad
        }
    )
}

const usuariosDelete = (req=request, res=response) => {
    const id = req.params.id
    res.json(
        {
            msg: 'DELETES API',
            id
        }
    )
}

const usuariosPatch = (req=request, res=response) => {
    res.json(
        {
            msg: 'Patch API'
        }
    )
}

module.exports = {
    usuariosDelete,
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch
}