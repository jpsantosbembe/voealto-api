
# voeAlto API

API responsavel por turbinar o projeto voeAlto.




## Autores

- [@santosbembe](https://github.com/jpsantosbembe)


## Documentação da API

#### Retorna todos os usuarios

```http
  GET /consulta/usuarios
```


#### Retorna um item

```http
  POST /cadastro/usuario
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome` `sobrenome` `cpf` `nickname` `senha`     | `string` | **Obrigatório**. Devem ser enviados em formato JSON|




## Instalação

Instale Node.js®

Instale MySQL e sincronize no Workbench o arquivo da pasta MySQLModel ou crie um novo banco de dados com a seguinte tabela¹:

    usuario(idusuario, usuarioNome, usuarioSobrenome, usuarioCPF, usuarioNick, usuarioSenha)

¹ Faça os ajustes necessarios no arquivo "nodemon.json"

Execute o projeto:

```bash
    cd pasta/do/projeto/voealto-api
    npm install
    npm start
```
    
