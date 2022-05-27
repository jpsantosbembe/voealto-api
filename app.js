const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser")


const rotaConsulta = require('./routes/consulta')
const rotaCadastro = require('./routes/cadastro');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(bodyParser.json())


app.use('/consulta', rotaConsulta)

app.use('/cadastro', rotaCadastro)


app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'ok'
    })
})

module.exports = app