const express = require("express");
const session = require("express-session");

const port = 3002;

var path = require("path");
const app = express();


app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("pages", path.join(__dirname, "/pages"));

//ROTAS

// Página Curso Análise e desenvovimento de sistemas.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/cursoADS.html');
  });

// Página Sobre Nós
  app.get('/Sobre', (req, res) => {
    res.sendFile(__dirname + '/pages/sobreNos.html');
  });
  
// Porta
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
