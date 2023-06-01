const {response, request} = require('express')

const usuariosGet = (req=request, res=response) => {
    res.json(
        {
            msg: 'GET API desde el controlador'
        }
    )
}

const usuariosPut = (req=request, res=response) => {
    res.json(
        {
            msg: 'PUT API'
        }
    )
}

const usuariosPost = (req=request, res=response) => {
    res.json(
        {
            msg: 'POST API'
        }
    )
}

const usuariosDelete = (req=request, res=response) => {
    res.json(
        {
            msg: 'DELETES API'
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