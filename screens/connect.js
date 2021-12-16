import React,{ useState,useEffect} from 'react';
import {Keyboard,Text,ImageBackground, TouchableWithoutFeedback, StyleSheet, View ,Image,Button} from "react-native"
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axios from 'axios'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function Connect({navigation}){

    const [email, setemail]=useState("");
    const [password, setPassword] = useState("");
    const [isSubmit,setisSubmit]=useState(false);
    useEffect(() => 
    {
        const authenticate = async()  => 
        {
          axios.post("http://192.168.137.1:80/new/authentifier.php",JSON.stringify
                ({
                  email:email,
                  password:password,
                })
            )
            .then((response) => 
            {
                if(response.data.result=="yes")
                {  
                        AsyncStorage.setItem('any_key',email);
                        AsyncStorage.setItem('isLoggeedIn',"1");
                        navigation.push('Compte');                         
                }
                else{alert("information invalide")}
                setisSubmit(false);
            })
            .catch((err) => { alert(err); });
        };
        if (isSubmit) authenticate();
    },[isSubmit]);

    const check=()=>
    {
        if(email.length==0 || password.length==0)
        {
            alert("remplir les champs");
        }
        else
        {
            setisSubmit(true)
        }
    }
    const pressHandler = () =>
    {
        navigation.push('Inscription');
    }
    
    return(
        <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>  
            <Image source ={require("../assets/images/profile.png")} style={{height:200,width:200,marginBottom:50}}/>
            <View style={styles.inputsview}> 
                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setemail(userEmail)}
                    placeholderText="Nom d'utilisateur"
                    iconType="user"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Mot de passe"
                    iconType="lock"
                    secureTextEntry={true}
                />
                <FormButton
                    buttonTitle="Se connecter"
                    onPress={check}
                />
                <Text style={{color:'green'}}> _______________________________________ </Text>
                <Button title="créer un nouveau compte" style={styles.btn} onPress={pressHandler}/>
            </View>  
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    )
}
const styles=StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:20
   },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        fontFamily:"sans-serif"   
     },
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:100,
    },
    btn:{
        marginTop:100,
    },
    inputsview:{
        marginTop:0,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }, 
})