const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const port = 3002;

var path = require("path");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/logado.html');
  });

  app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });
  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
