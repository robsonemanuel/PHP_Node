<?php
$json_file = file_get_contents("http://localhost:3000/clientes");
$teste = '{"pessoas"'.':'.$json_file.'}';

$jsonObj = json_decode($teste);

$pessoas = $jsonObj->pessoas;

foreach ( $pessoas as $e )
{
   echo "id: $e->id - nome: $e->nome - senha: $e->senha<br>";
}

//$original = array("[","]");
//$trocados = array("","");
//$replace = str_replace($original,$trocados,$json_file);
//$obj = json_decode($replace);

 ?>
