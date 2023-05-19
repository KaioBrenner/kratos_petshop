const express = require('express');
const ToDocontroller = require('./controllers/TodoController')
const routes = express.Router();

/* Rotas */

routes.get('/', (req,res)=>{
    return res.json({hello:'Hello Worldadasdasdasdasd'})
})

routes.get('/todos',ToDocontroller.teste)

module.exports = routes;