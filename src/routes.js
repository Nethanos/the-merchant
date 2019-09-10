const express = require('express');
const routes = express.Router();

const productController = require('./controller/product-controller');

routes.get('/products', productController.findProducts);

routes.get('/products/:id', productController.retrieve);

routes.post('/products/new', productController.createProduct);

routes.put('/product/:id', productController.updateProduct);

routes.delete('/product/:id', productController.deleteProduct);

  module.exports = routes;