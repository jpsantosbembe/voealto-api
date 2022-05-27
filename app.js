const express = require('express')
const app = express();

const rotaConsulta = require('./routes/consulta')


app.use('/consulta', rotaConsulta);







app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'ok'
    })
})

module.exports = app