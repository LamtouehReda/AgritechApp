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


    $nom=$DecodedData['nom'];
    $prenom=$DecodedData['prenom'];
    $email=$DecodedData['email'];
    $password=$DecodedData['password'];
    $repassword=$DecodedData['repassword'];
    $password=MD5($password);
    $repassword=MD5($repassword);

    $SQ="SELECT * FROM user WHERE email=? and password=?";
    $stmt=$CN->prepare($SQ);
    $stmt->bindValue(1,$email); 
    $stmt->bindValue(2,$password); 
    $stmt->execute();
    if ($stmt->rowCount()==0)
    {
        $req="INSERT INTO user VALUES ('',?,?,?,?,?,'','','')";
        $stmt=$CN->prepare($req);
        $stmt->bindValue(1,$email);
        $stmt->bindValue(2,$password);
        $stmt->bindValue(3,$repassword);
        $stmt->bindValue(4,$nom);
        $stmt->bindValue(5,$prenom);
        $stmt->execute();

        $arr=array("result"=>"yes");
        echo json_encode($arr);
        
    }
    else
    {
        $arr=array("result"=>"no");
        echo json_encode($arr);
    }
        
?>
