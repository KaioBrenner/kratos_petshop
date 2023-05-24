const express = require('express');
const clientController = require('./controllers/ClientController');
const petController = require('./controllers/PetController')
const routes = express.Router();

/* Rotas  Client */
routes.post('/newClient', clientController.createClient)
routes.get('/clients', clientController.clientLists)
routes.delete('/cliente/:id', clientController.deletClient)

/* Rotas Pets */
routes.get('/pets',petController.petList)
routes.post('/newPet', petController.createPet)
routes.post('/pet/:id', clientController.deletClient)



module.exports = routes;