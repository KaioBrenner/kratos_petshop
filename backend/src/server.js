const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');
const cors = require("cors");

require("./database");

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log("====================================");
  console.log(`Porta iniciada: http://localhost:3000/`);
  console.log("====================================");
});


