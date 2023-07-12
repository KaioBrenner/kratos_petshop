const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./database/index");

const PORT = 3000;

require("./database");

const app = express();

connectDatabase();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(
  cors({
    origin: ["https://kratos-petshop-backend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Porta iniciada: http://localhost:${PORT}/`);
  console.log("====================================");
});
