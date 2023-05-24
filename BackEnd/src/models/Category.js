const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    food:{
        type: String,
        validate:{
            validator: food => food > 0,
            message: 'O campo food não pode ser nulo'
        },
        required:[true, 'O campo Food é obrigatório']
    },

    acessory:{
        type: String,
        validate:{
            validator: acessory => acessory > 0,
            message: 'O campo acessory não pode ser nulo'
        },
        required:[true, 'O campo acessory é obrigatório']
    },

    hygiene:{
        type: String,
        validate:{
            validator: hygiene => hygiene > 0,
            message: 'O campo hygiene não pode ser nulo'
        },
        required:[true, 'O campo hygiene é obrigatório']
    },

    toy:{
        type: String,
        validate:{
            validator: toy => toy > 0,
            message: 'O campo toy não pode ser nulo'
        },
        required:[true, 'O campo toy é obrigatório']
    },

})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category;