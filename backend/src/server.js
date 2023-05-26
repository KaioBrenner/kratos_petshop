const express = require('express');
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express();

app.use(express.json());

// Configurar o CORS
app.use(cors({
  origin: 'http://127.0.0.1:5173'
}));

app.use(routes);

app.listen(3000, () => {
  console.log('====================================');
  console.log(`Porta iniciada: http://localhost:3000/`);
  console.log('====================================');
});
