const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaPessoas = require('./routes/pessoas');
const rotaTarefas = require('./routes/tarefas');

app.use (morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.use((req, res, next) =>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-with, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

app.use('/tarefas', rotaTarefas);
app.use('/pessoas', rotaPessoas);

//quando não encontrar rota, retorne: 
app.use((req, res, next) =>{
    const erro = new Error('não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;