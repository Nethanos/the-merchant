const mgos = require('mongoose')
const mgosPaginate = require('mongoose-paginate')

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

ProductSchema.plugin(mgosPaginate)

mgos.model('Product', ProductSchema);