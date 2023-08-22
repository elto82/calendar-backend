const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

//directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//auth // crear, login, renew
app.use("/api/auth", require("./routes/auth"));

//CRUD: Events

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
