const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {

    async retrieve(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async findProducts(req, res) {
        try {
            
            let products = await Product.find();
    
            return res.json(products);
        }catch(e) {
                throw new Error(e);
        }
    },

    async createProduct(req, res) {

        try{
            const product = await Product.create(req.body);
            return res.json(product.id);
        }catch(e){
            throw new Error(e)
        }
    },
    
    async updateProduct(req, res) {
        try {
            const product =  await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

            return res.json(product);
        } catch(e){
            throw new Error(e)
        }
    },

    async deleteProduct(req, res) {
        try{
            await Product.findByIdAndRemove(req.params.id);

            return res.send();

        }catch(e){

        }
    }

}