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
    $password=$DecodedData["password"];
    $password=MD5($password);

    $SQ="SELECT * FROM user WHERE email=?";
    $stmt=$CN->prepare($SQ);
    $stmt->bindValue(1,$email); 
   
    $stmt->execute();
    if ($stmt->rowCount()==0)
    {
        $arr=array("result"=>"no");
        echo json_encode($arr);
    }
    else
    {
        $info=$stmt->fetch(PDO::FETCH_ASSOC);
        if(strcmp($info["password"],$password)==0)
        {
            $arr=array("result"=>"yes");
            echo json_encode($arr);
        }
        else
        {
            $arr=array("result"=>"no");
            echo json_encode($arr);
        }
       
    }
   
?>
















