import React,{useState,useEffect} from 'react'
import { View,ScrollView,ImageBackground,Text,StyleSheet } from "react-native";
import axios from 'axios'
import Graph from './graph'


export default function Statistique() {

    const [temperature,setTemperature]=useState([0,0,0,0,0,0,0]);
    const [ph,setph]=useState([0,0,0,0,0,0,0]);
    const [humidite,sethumidite]=useState([0,0,0,0,0,0,0]);

    useEffect(() => {
      const authenticate = async()  => 
      {
        axios.post("http://192.168.137.1:80/new/graphe.php")
          .then((response) =>
          {
              setTemperature(response.data.temperature);
              setph(response.data.ph);
              sethumidite(response.data.humidite)         
          })
          .catch((err) => 
          {
            alert(err);
          });
      };
      authenticate();
      },[]);
    return(
      <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image1}>
      <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={true}
      scrollIndicatorInsets={{top:10,left:10,bottom:10,right:10}}
    >  
      <View style={styles.container}>
        <Graph valeurs={temperature} titre="Température" color={"#52eb34"} axis={"°C"} img={ require('../assets/temp.png')}/>
      </View>
      <View style={styles.container}>
        <Graph valeurs={humidite} titre="Humidité" color={"#deeb34"} axis={"%"}  img={require('../assets/humidity.png')}/>
      </View>
      <View style={styles.container}>
        <Graph valeurs={ph} titre="PH" color={"#34deeb"} axis={""} img={ require('../assets/ph-meter.png')}/>
      </View>

    </ScrollView>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },

   container:{
    marginLeft:20,
    marginRight:20,
     padding:10,
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   }
})