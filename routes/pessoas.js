const express = require('express');
const router = express.Router();


//retorna todas as pessoas da API
router.get('/',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'Pessoas selecionadas!'
    });
});;

//Cadastra novas pessoas na API
router.post('/', (req, res, next) =>{
    const pessoas = {
        nome: req.body.nome,
        funcao: req.body.funcao
    }
    res.status(201).send({
        mensagem: 'Cadastro realizado com sucesso!',
        funcaoPessoa: pessoas 
    });
});

//Busca uma pessoa especifica dentro da API
router.get('/:id_pessoas', (req, res, next) =>{
    const id = req.params.id_pessoas

    if (id === 'Perfil'){
        res.status(200).send({
            mensagem: 'Perfil selecionado encontrado!',
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Não foi possivel encontrar o perfil solicitado!'
        });
    }
    
});

module.exports = router;
