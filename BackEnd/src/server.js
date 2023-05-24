const express = require('express');
const routes = require('./routes')
const cors = require('cors')

require('./database')

const app = express();


app.use(express.json());
app.use(routes);
app.use(cors());


app.listen(3000, ()=>{
    console.log('====================================');
    console.log(`Porta iniciada: http://localhost:3000/`);
    console.log('====================================');
});

