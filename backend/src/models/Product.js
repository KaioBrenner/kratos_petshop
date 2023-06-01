const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutcSchema = new Schema({

    name:{
        type:String,
        validate:{
            validator: nome => nome.length > 0,
            message: 'O nome do produto não pode ser nulo'
        },
        required:[true, 'O campo nome é obrigatório'],
        unique:[true]
    },

    category:{
        type: String,
        required: [true, 'O campo categoria é obrigatório']
    },

    stock:{
        type: Number,
        integer: true,
        validate:{
            validator: estoque => estoque > 0,
            message: 'O estoque não pode ser menor que 0' 
        },
        required:[true, 'O campo estoque é obrigatório']
    },

    price:{
        type: Number,
        validate:{
            validator: preco => preco > 0,
            message: 'O preço não pode ser menor que 0' 
        },
        require:[true, 'O campo preco é obrigatório']
    }

});

const Product = mongoose.model('Product', ProdutcSchema)

module.exports = Product;