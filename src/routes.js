const express = require('express');
const routes = express.Router();

const homeController = require('./controller/home-controller');
const productController = require('./controller/product-controller');

//home

routes.get('/', homeController.welcome);

// Product
routes.get('/products', productController.findProducts);

routes.get('/products/:id', productController.retrieve);

routes.post('/products/new', productController.createProduct);

routes.put('/product/:id', productController.updateProduct);

routes.delete('/product/:id', productController.deleteProduct);

  module.exports = routes;