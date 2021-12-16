<?php 
    $pdo = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");

    $json =file_get_contents('php://input');
    $obj=json_decode($json,true);

    $ph=$obj['ph'];
    $temp=$obj['temp'];
    $hum=$obj['hum'];
    $date = date('Y-m-d');

    try{
        $req="INSERT INTO graph (temperature,ph,humidite,date) VALUES (?,?,?,?)";
        $stmt=$pdo->prepare($req);
        $stmt->bindValue(1,$temp);
        $stmt->bindValue(2,$ph);
        $stmt->bindValue(3,$hum);
        $stmt->bindValue(4,$date);
        $stmt->execute();
        $arr=array("ph"=>$ph,"temperature"=>$temp,"humidite"=>$hum,"date"=>$date);
        echo json_encode($arr);
        }
    catch(PDOException $e){
        echo $e->getMessage();
    }
?>