const express = require('express')
const router = express.Router();

const mysql = require("../mysql").poolk

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'get consulta'
    })
})

router.post('/usuario', (req, res, next) => {
    const usuario = {
        id : req.body.id
    }

    res.status(201).send({
        mensagem: 'post consulta'
    })
})

module.exports = router