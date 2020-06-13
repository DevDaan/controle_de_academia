const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes/routes')


const server = express()


// configurando middlewares
server.use(express.static('public')) //transformando a pasta public para utilizar arquivos estáticos

// linha responsável por fazer o req.bod funcionar
server.use(express.urlencoded({extended: true}))



//configurando o nunjucks
server.set("view engine", "njk")
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})


// chamando as rotas
server.use(routes)



//iniciando o servidor
server.listen(5000, () =>{
    console.log('Seridor rodando na porta 5000')
})