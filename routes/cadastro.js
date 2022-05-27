const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');
const mysql = require("../mysql").pool

router.post('/usuario', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        
        bcrypt.hash(req.body.senha, 50, (errBcrypt, hash) => {
            if(errBcrypt) {return res.status(500).send({error : errBcrypt})}

            conn.query(
                'insert into usuario (usuarioNome, usuarioSobrenome, usuarioCPF, usuarioNick, usuarioSenha) values (?, ?, ?, ?, ?)',
                [req.body.nome, req.body.sobrenome, req.body.cpf, req.body.nick, hash],
                (error, results, field) => {
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
                        usuario : {
                            Nome : req.body.nome,
                            id : results.insertId
                        }
                    })
                }
            )

        })

    })
})

module.exports = router