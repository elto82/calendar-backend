const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

//directorio publico
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
