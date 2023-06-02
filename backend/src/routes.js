const express = require('express');
const clientController = require('./controllers/ClientController');
const petController = require('./controllers/PetController');
const CategoryController = require('./controllers/CategoryController');
const productController = require('./controllers/ProductController');
const EmployeeController = require('./controllers/EmployeeController');
const routes = express.Router();

/* Rotas  Client */
routes.post('/newClient', clientController.createClient)

routes.get('/clients', clientController.clientLists)
routes.get('/getClient/:id', clientController.getClient)

routes.put('/updateClient/:id', clientController.updateClient)

routes.delete('/cliente/:id', clientController.deleteClient)

/* Rota Categoria */
routes.post('/newCategory', CategoryController.createCategorys)

routes.get('/categoryList', CategoryController.categoryList)

routes.delete('/deletCategory', CategoryController.deletCategory)


/* Rotas Pets */
routes.get('/pets',petController.petList)
routes.post('/newPet/:id', petController.createPet)
routes.put('/updatePet/:id', petController.updatePet)
routes.delete('/deletePet/:id', petController.deletePet)


/*Rota Produto */
routes.post('/newProduct', productController.createProduto)
routes.get('/product', productController.productList)


/* Rota ADM */
routes.post('/newEmployee', EmployeeController.createEmployee)
routes.get('/employees', EmployeeController.employeeLists)


module.exports = routes;