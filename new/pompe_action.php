<?php
    try
    {
        $CN = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");   
    }
    catch(PDOException $e)
    {
        $e->getMessage();
    }

    $req="SELECT * FROM params";
    $stmt=$CN->prepare($req);
    $stmt->execute();
    $info=$stmt->fetch(PDO::FETCH_ASSOC);
    if($info["activer"]==0){
        $arr=array("action"=>"OFF");
        echo json_encode($arr);
    }
    else
    {
        $arr=array("action"=>"ON");
        echo json_encode($arr);
       
    }
?>