<?php
$serveur='https://databases-auth.000webhost.com/index.php';
try{
$db=new PDO("mysql:host=$serveur;dbname=id16578666_ir","id16578666_irm_younes","o=ogMy\SjbGBCG7+");
echo("good");
}
catch(PDOException $e){
echo 'erreur: '.$e->getMessage();}
?>