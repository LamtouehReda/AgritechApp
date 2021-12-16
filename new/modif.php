<?php
     try
    {
        $CN = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");   
    }
    catch(PDOException $e)
    {
        $e->getMessage();
    }

    $EncodedData=file_get_contents('php://input');
    $DecodedData=json_decode($EncodedData,true);

    $email=$DecodedData["email"];
    $nom=$DecodedData["nom"];
    $prenom=$DecodedData["prenom"];
    $phone=$DecodedData["phone"];
    $country=$DecodedData["country"];
    $city=$DecodedData["city"];
    $value=$DecodedData["value"];

    $SQ="UPDATE user SET email=?, nom=?, prenom=?, phone=?, country=?, city=? WHERE email=?";
    $stmt=$CN->prepare($SQ);
    $stmt->bindValue(1,$email); 
    $stmt->bindValue(2,$nom); 
    $stmt->bindValue(3,$prenom); 
    $stmt->bindValue(4,$phone); 
    $stmt->bindValue(5,$country); 
    $stmt->bindValue(6,$city); 
    $stmt->bindValue(7,$value); 
    $stmt->execute();
    $arr=array("result"=>"yes");
    echo json_encode($arr);
    