const Producte = require('../models/Product')


class ProducteController {
    static async GetAllProduct(req,res){
        try {
            // Retrieve all products from the database
            const products = await Producte.find();
        
            res.status(200).json(products);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }
    static async GetPhublishedProducte(req,res){
        try {
            // Retrieve all products from the database
            const products = await Producte.find({Published:true});
        
            res.status(200).json(products);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }

    static async GetProductByID(req,res){
        try {
            const productId = req.params.id;
        
            // Find the product by ID
            const product = await Producte.findById(productId);
        
            if (!product) {
              return res.status(404).json({ error: 'Product not found' });
            }
        
            res.status(200).json(product);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }

    static async AddProduct(req,res){
        try {
            const { name, description, quantity, category, price } = req.body;
        
            // Validate the request body
            if (!name || !description || !quantity || !category || !price) {
              return res.status(400).json({ error: 'All fields are required' });
            }
        
            // Create a new product
            const product = new Producte({
              name,
              description,
              quantity,
              category,
              price
            });
        
            // Save the product to the database
            await product.save();
        
            res.status(201).json(product);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }

    static async UpdateProduct(req,res){
        try {
            const productId = req.params.id;
            const { name, description, quantity, category, price } = req.body;
        
            // Find the product by ID
            const product = await Producte.findById(productId);
        
            if (!product) {
              return res.status(404).json({ error: 'Product not found' });
            }
        
            // Update the product fields
            product.name = name;
            product.description = description;
            product.quantity = quantity;
            product.category = category;
            product.price = price;
        
            // Save the updated product
            await product.save();
        
            res.status(200).json(product);
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }


    static async DeleteProduct(req,res){
        try {
            const productId = req.params.id;
             
            // Find the product by ID
            const product = await Producte.findById(productId);
            console.log(product)
            if (!product) {
              return res.status(404).json({ error: 'Product not found' });
            }
        
            // Delete the product
            const result = await Producte.deleteOne({ _id: productId });
        
            res.status(200).send({message:"Product deleted Successfully"}); // Respond with a 204 status (No Content) to indicate successful deletion
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }


    static async DeleteAllProducte(req,res){
        try {
            // Delete all products from the database
            const result = await Producte.deleteMany({});
        
            if (result.deletedCount === 0) {
              return res.status(404).json({ error: 'No products found to delete' });
            }
        
            res.status(200).send({message:"All Producte deleted SuccessFully"}); // Respond with a 204 status (No Content) to indicate successful deletion
          } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
          }
    }

    static async SearchProduct(req,res){
        try {
            const data= await Producte.find(
                {
              "$or":[
                {name:{$regex:req.params.key,}},
              ]
            })
            res.send(data);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
module.exports = ProducteController