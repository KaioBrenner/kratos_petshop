const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellHistoricSchema = new Schema({

  clientCPF: {
    type: String,
    validate:{
        validator: clientCPF => clientCPF.lenght > 0,
        message: 'O CPF é obrigatório'
    },
    required: [true, "O campo CPF é obrigatório"],
  },

  clientName: {
    type: String,
    validate:{
        validator: clientName => clientName.lenght > 0,
        message: 'O nome é obrigatório'
    },
    required: [true, "O campo Nome é obrigatório"],
  },

  totalPrice:{
    type: Number,
    validate:{
        validator: totalPrice => totalPrice > 0,
        message: 'O preço total é obrigatório'
    },
    required:[true, 'O campo preço total é obrigatório']
  },

  dateTime: {
    type: String,
    required: [true, "O campo dateTime é obrigatório"],
  },
});

const SellHistoric = mongoose.model('SellHistoric', SellHistoricSchema);

module.exports = SellHistoric;