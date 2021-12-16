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
        $P=1;
        $req="UPDATE params SET activer=?";
        $stmt=$CN->prepare($req);
        $stmt->bindValue(1,$P);
        $stmt->execute();
        $arr=array("action"=>"ON");
        echo json_encode($arr);
    }
    else
    {
        $P=0;
        $req="UPDATE params SET activer=?";
        $stmt=$CN->prepare($req);
        $stmt->bindValue(1,$P);
        $stmt->execute();
        $arr=array("action"=>"OFF");
        echo json_encode($arr);
    }
?>