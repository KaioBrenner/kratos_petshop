const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pet-shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{console.log("Connected to DB")})
    .catch(console.error)

const db = mongoose.connection;


db.on('error', (error) => {
    console.error('Erro de conexão:', error);
  });
  
  db.once('open', () => {
    console.log('Conexão estabelecida com sucesso.');
  });
  
  db.on('disconnected', () => {
    console.log('Conexão perdida com o banco de dados.');
  });

module.exports = db