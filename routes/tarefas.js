const express = require('express');
const router = express.Router();


//retorna todas as tarefas da API
router.get('/',(req, res, next) =>{
    res.status(200).send({
        mensagem: 'Tarefas disponiveis!'
    });
});;

//Cadastra novas tarefas na API
router.post('/', (req, res, next) =>{
    const tarefas = {
        id_tarefas: req.body.id_tarefas,
        horasTrabalhada: req.body.horasTrabalhada 
    }
    res.status(201).send({
        mensagem: 'Cadastro de tarefa realizado!',
        tarefaPessoa: tarefas
    });
});

//Busca uma tarefa especifica dentro da API
router.get('/:id_tarefas', (req, res, next) =>{
    const id = req.params.id_tarefas

    if (id === 'Tarefa'){
        res.status(200).send({
            mensagem: 'Tarefa selecionada encontrada!',
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Não foi possivel encontrar a tarefa solicitada!'
        });
    }
    
});

module.exports = router;