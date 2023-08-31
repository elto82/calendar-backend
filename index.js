const express = require("express");
const { dbCocnnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();

//base de datos
dbCocnnection();

//cors
app.use(cors());

//directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//auth // crear, login, renew
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

//CRUD: Events

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
