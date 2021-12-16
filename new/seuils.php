<?php
    $pdo = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");

    $json =file_get_contents('php://input');
    $obj=json_decode($json,true);

    $ph=$obj['ph'];
    $temp=$obj['temperature'];
    $hum=$obj['humidite'];

    try{
        $req="UPDATE seuils SET temperature=?, humidite=?, ph=?";
        $stmt=$pdo->prepare($req);
        $stmt->bindValue(1,$temp);
        $stmt->bindValue(2,$hum);
        $stmt->bindValue(3,$ph);
        $stmt->execute();
        $arr=array("result"=>"good");
        echo json_encode($arr);
        }
    catch(PDOException $e){
        echo $e->getMessage();
    }