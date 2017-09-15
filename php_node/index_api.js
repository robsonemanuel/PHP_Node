const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POST mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/',(req,res) => res.json({ message : 'Funcionando!' }));
app.use('/',router);

//inicia servidor
app.listen(port);
console.log('API funcionado!');

function execSQLQuery(sqlQry,res){
  const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'usuario',
  });

  connection.query(sqlQry, function(error,results,fields){
    if(error)
       res.json(error);
    else
      res.json(results);
      connection.end();
      console.log('Executou');

  });
}

router.get('/clientes', (req,res) =>{
   execSQLQuery('SELECT * FROM pessoas',res);
});

router.post('/clientes',(req,res) =>{
  const nome = req.body.nome.substring(0,150);
  const senha = req.body.senha.substring(0,11);
  execSQLQuery(`INSERT INTO pessoas(nome,senha) VALUES('${nome}','${senha}')`,res);
});
