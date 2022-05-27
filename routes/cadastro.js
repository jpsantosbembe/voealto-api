const express = require('express')
const router = express.Router();

const mysql = require("../mysql").pool

router.post('/usuario', (req, res, next) => {

    mysql.getConnection((error, conn) => {


        conn.query(
            'insert into usuario (usuarioNome, usuarioSobrenome, usuarioCPF, usuarioNick, usuarioSenha) values (?, ?, ?, ?, ?)',
            [req.body.nome, req.body.sobrenome, req.body.cpf, req.body.nick, req.body.senha],
            (error, result, field) => {
                conn.release()

                //Erro de consulta sql
                if (error) {
                    return res.status(500).send({
                        error : error,
                        response : null
                    })
                } 

                res.status(201).send({
                    mensagem : "Usuario criado!",
                    id_usuario : result.insertId
                })
            }
        )
    })
})

module.exports = router