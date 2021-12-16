import React,{useState,useEffect} from 'react'
import {View,Image,TouchableWithoutFeedback,Text,Keyboard, TouchableOpacity,ImageBackground,TextInput,StyleSheet,} from 'react-native';
import FormButton from '../components/FormButton';
import axios from 'axios'

export default function Seuils(){
    const [ph,setph]=useState("")
    const [temperature,settemperature]=useState("")
    const [humidite,sethumidite]=useState("")
    const [isSubmit,setisSubmit]=useState(false);
    const[hum1,sethum1]=useState("")
    const[temp1,settemp1]=useState("")
    const[ph1,setph1]=useState("")
   ////////////////////////////////////GET SEUILS//////////////////////////////////////
    useEffect(() => 
    {
      let timeout=setInterval( async()  => 
      {
        axios.post("http://192.168.137.1:80/new/get_seuils.php") 
          .then((response) => 
          {
           sethum1(response.data.hum1)
           setph1(response.data.ph1)
           settemp1(response.data.temp1)
          })
          .catch((err) => { alert(err); });
      }, 3000);
      
      return () => {
        clearTimeout(timeout);
      }   
    }
    ,[]);
///////////////////////////////////INERT SEUILS/////////////////////////////////////
    useEffect(() => 
  {
      const insert =async()  => 
    {
      axios.post("http://192.168.137.1:80/new/seuils.php",JSON.stringify
      ({
        temperature:temperature,
        ph:ph,
        humidite:humidite,  
      }))
      .then((response)=>
      {
          if(response.data.result=="good"){alert("enregistrement est réussi")}
          else{alert("erreur")}
          setisSubmit(false)
      })
        .catch((err) => { alert(err); });
    };
    if (isSubmit) insert();

  },[isSubmit]);

    const  enregistrer=()=>{
        if(ph=="" || humidite=="" || temperature=="")
        {
            alert("remplir les champs")
        }
        else
        {
            setisSubmit(true)
        }
        
    }
    return(
        
        <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image}>
            <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
                
        <View style={styles.container}>
        <Text style={styles.text1}>Réglages des seuils:</Text>
            <View style={styles.fils}>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>          
                    <View style={styles.temp} >     
                        <Image style={{width:50,height:50}} source={require('../assets/temp.png')}/>
                        <Text style={styles.text}>{temp1}°C</Text>
                        <Text style={{marginTop:5}}>Température</Text>  
                    </View>
                    <TextInput 
                        onChangeText={(temp) => settemperature(temp)}
                        placeholder="Température limite" 
                        style={styles.input}
                    />
                </View>   
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>          
                    <View style={styles.temp} >
                        <Image style={{width:50,height:50}} source={require('../assets/humidity.png')}/>
                        <Text style={styles.text}>{hum1} %</Text>
                        <Text style={{marginTop:10}}>Humidité</Text>
                    </View>
                    <TextInput 
                        onChangeText={(humidity) => sethumidite(humidity)}
                        placeholder="Humidité limite" 
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.fils}>  
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>          
                    <View style={styles.temp} >     
                        <Image style={{width:50,height:50}} source={require('../assets/ph-meter.png')}/>
                        <Text style={styles.text}></Text>
                        <Text style={styles.text}>{ph1} PH</Text>
                    </View>
                    <TextInput 
                        onChangeText={(acidite) => setph(acidite)}
                        style={styles.input} 
                        placeholder="PH limite"
                    />
                </View>
            </View>
            <FormButton
                    buttonTitle="Sauvgarder"
                    onPress={enregistrer}
                />
        </View> 
        </TouchableWithoutFeedback>   
        </ImageBackground>
        
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:10
      },
    input:{
    marginTop:3,
    borderBottomColor:"grey",
    borderBottomWidth:1
    },
    text1: {
        color: "#3cb371",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        
      },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'column'
    },
    fils:{
        marginTop:0,
        justifyContent:"center",
        flex:0.3,
        alignItems:'center',
        flexDirection:'row',
        width:"100%",
        height:"10%"
      }, 
      temp:{
        width:120,
        borderWidth:2,
        height:110,
        borderRadius:10,
        borderColor:'#ff953e',
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        paddingTop:10
      },
    })