import React,{useState,useEffect} from "react";
import { Alert,View,StyleSheet,Text,Image} from "react-native";
import axios from 'axios'
import FormButton from '../components/FormButton';

export default function Principal(){
  const [ph,setph]=useState("")
  const [temperature,settemperature]=useState("")
  const [humidite,sethumidite]=useState("")
  const [vent,setvent]=useState("")
  const [ventilateur,setventilateur]=useState("")
  const [act,setact]=useState("")
  const[temp1,settemp1]=useState("")
  var phmoy=0;
  var tempmoy=0;
  var hummoy=0;
  const[pompe,setpompe]=useState(false);

//////////////////////////////GET PARAMS////////////////////////////////////////

useEffect(() => 
{
  let timeout=setInterval( async()  => 
  {
    axios.post("http://192.168.137.1:80/new/get_params.php") 
      .then((response) => 
      {
        //////////////////affichage sur linterface///////////////////////
          setph(response.data.ph)
          settemperature(response.data.temperature)
          sethumidite(response.data.humidite)
          setvent(response.data.vent)
          if(response.data.ventilateur=='1'){
            setventilateur('ON')
          }
          else{setventilateur('OFF')}
        //////////////////modification des params///////////////////////
          phmoy=phmoy+parseInt(response.data.ph);
          tempmoy=tempmoy+parseInt(response.data.temperature);
          hummoy=hummoy+parseInt(response.data.humidite);
      })
      .catch((err) => { alert(err); });
  }, 3000);
  return () => {
    clearTimeout(timeout);
  }
}
,[]); 

//////////////////////////////Insert GRAPH////////////////////////////////////////

useEffect(() => 
{
let timeout=setInterval( async()  => 
{
  axios.post("http://192.168.137.1:80/new/insertGraph.php",JSON.stringify
  ({
    temp:tempmoy/28800,
    ph:phmoy/28800,
    hum:hummoy/28800,  
  }))
    .then(()=>
    {
      tempmoy=0;
      hummoy=0;
      phmoy=0;
    })
    .catch((err) => { alert(err); });
},3600000*24);
return () => {
  clearTimeout(timeout);
}
},[]);

//////////////////////////////GET Pompe action////////////////////////////////////////

useEffect(()=>
{
  const test=async() =>
  {
    axios.post("http://192.168.137.1:80/new/pompe_action.php")
    .then((response)=>
    {
      setact(response.data.action);
    })
    .catch((err)=>{alert(err);});
  };
  test();
},[]);

//////////////////////////////USE POMPE////////////////////////////////////////

useEffect(()=>
  {
    const activer=async() =>
    {
      axios.post("http://192.168.137.1:80/new/pompe.php")
      .then((response)=>
      {
        setact(response.data.action);
        setpompe(false)
      })
      .catch((err)=>{alert(err);});
    };
    if(pompe) activer();
  },[pompe]);

  const activer_pompe=()=>{setpompe(true);}

  /////////////////////////////////////////////////////////////

  return( 
      <View style={styles.con}>
      <View style={styles.haut}>
      <Image style={{width:"100%",height:"100%",marginTop:10}} source={require('../assets/images/principal.jpg')}/>
      </View>
        <View style={styles.fils}>
            <View style={styles.temp} >
                  <Image style={{width:50,height:50}} source={require('../assets/temp.png')}/>
                  <Text style={styles.text}>{temperature} °C</Text>
                  <Text style={{marginTop:5}}>Température</Text>
            </View>
            <View style={styles.temp} >
                <Image style={{width:50,height:50}} source={require('../assets/humidity.png')}/>
                <Text style={styles.text}>{humidite} %</Text>
                <Text>Humidité</Text>
              </View>
        </View>
          <View style={styles.fils}>
            <View style={styles.temp} >
                <Image style={{width:30,height:30,marginRight:10}} source={require('../assets/wind.png')}/>
                <Text style={styles.text}>{vent} km/h</Text>
                <Text style={{marginTop:10}}>Vitesse du vent</Text>
            </View>
      
            <View style={styles.temp} >
              <Image style={{width:50,height:50,marginRight:10}} source={require('../assets/water-pump.png')}/>
              <Text style={styles.text}>{act}</Text>
              <Text>Pompe</Text>
            </View>
          </View>
        <View style={styles.fils}>
          <View style={styles.temp} >
                <Image style={{width:50,height:50,marginRight:14}} source={require('../assets/ph-meter.png')}/>
                <Text style={styles.text}>{ph}</Text>
                <Text style={{marginTop:10}}>    PH</Text>
            </View>
     
            <View style={styles.temp} >
                <Image style={{width:50,height:50,marginRight:14}} source={require('../assets/venti.png')}/>
                <Text style={styles.text}>{ventilateur}</Text>
                <Text>Ventilateur</Text>
            </View>
        </View>
        <FormButton
        buttonTitle="Pompe"
        onPress={activer_pompe}
    />
      </View>    
    )
  }

const styles=StyleSheet.create({
 
  haut:{
    width:"100%",
    height:200,
  },
  con:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  fils:{
    marginTop:10,
    backgroundColor:'#fff',
    justifyContent:"center",
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    width:"100%"
  }, 
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginRight:10
  },
  temp:{
    width:140,
    height:100,
    borderRadius:10,
    borderColor:'#ff953e',
    margin:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    paddingTop:10
  },
})


