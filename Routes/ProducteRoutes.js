const express = require('express');
const ProducteController = require('../Controller/ProducteController');


class ProducteRoutes{
    constructor() { 
        this.router = express.Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes(){
     this.router.get('/Products',ProducteController.GetAllProduct)
     this.router.get('/Products/Published',ProducteController.GetPhublishedProducte)
     this.router.get('/Products/:id',ProducteController.GetProductByID)
     this.router.get('/Search/Products/:key',ProducteController.SearchProduct)
    }
    postRoutes(){
        this.router.post('/Products',ProducteController.AddProduct)

    }
    patchRoutes(){
      this.router.patch('/Products/:id',ProducteController.UpdateProduct)
    }
    deleteRoutes(){
        this.router.delete('/Products/:id',ProducteController.DeleteProduct)
        this.router.delete('/Products',ProducteController.DeleteAllProducte)
    }
}
module.exports = new ProducteRoutes().router