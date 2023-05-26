const express = require('express');
const clientController = require('./controllers/ClientController');
const petController = require('./controllers/PetController');
const CategoryController = require('./controllers/CategoryController');
const routes = express.Router();

/* Rotas  Client */
routes.post('/newClient', clientController.createClient)


routes.get('/clients', clientController.clientLists)
routes.get('/getClient/:id', clientController.getClient)

routes.delete('/cliente/:id', clientController.deleteClient)

/* Rota Categoria */
routes.post('/newCategory', CategoryController.createCategorys)

routes.get('/categoryList', CategoryController.categoryList)

routes.delete('/deletCategory', CategoryController.deletCategory)


/* Rotas Pets */
routes.get('/pets',petController.petList)
routes.post('/newPet', petController.createPet)
routes.post('/pet/:id', clientController.deleteClient)



module.exports = routes;