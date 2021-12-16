<?php
  try
  {
      $CN = new PDO("mysql:host=localhost;dbname=irm","root-net"," ");   
  }
  catch(PDOException $e)
  {
      $e->getMessage();
  }

  $req="SELECT * FROM seuils";
  $stmt=$CN->prepare($req);
  $stmt->execute();
  $info=$stmt->fetch(PDO::FETCH_ASSOC);
  $ph1=$info['ph'];
  $temp1=$info['temperature'];
  $hum1=$info['humidite'];
  
  $arr=array("hum1"=>$hum1,"temp1"=>$temp1,"ph1"=>$ph1);
  echo json_encode($arr);

?>