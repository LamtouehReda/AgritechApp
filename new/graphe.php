<?php 

$encoded_data=file_get_contents("php://input");
$decoded_data=json_decode($encoded_data,true);

try{
    $pdo = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");
    $req="SELECT temperature,ph,humidite FROM graph ORDER BY date DESC LIMIT 7";
    $stmt=$pdo->prepare($req);
    $stmt->execute();
    $pdo=NULL;
    $result = $stmt->fetchAll();
    $respons=[];
    $temp=[];
    $ph=[];
    $humidite=[];
    foreach($result as $row){
        array_push($temp,(float)$row['temperature']);
        array_push($ph,(float)$row['ph']);
        array_push($humidite,(float)$row['humidite']);
    }
    $respons=array("temperature"=>$temp,"ph"=>$ph,"humidite"=>$humidite);
    echo json_encode($respons);
}
catch(PDOException $e){
    echo $e->getMessage();
}
?>