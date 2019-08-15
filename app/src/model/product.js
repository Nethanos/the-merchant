const mgos = require('mongoose')

const ProductSchema = new mgos.Schema({
    productName: {
        type: String,  
        required: true
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mgos.model('Product', ProductSchema);