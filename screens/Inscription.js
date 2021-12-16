import React,{useState,useEffect} from 'react';
import {ImageBackground, Keyboard,Alert, TouchableWithoutFeedback,StyleSheet, Text, View,Image,Button} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import axios from 'axios'

export default function Inscription({navigation}){
 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setrePassword] = useState("");
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [isSubmit,setisSubmit]=useState(false)

        useEffect(() => {
        const authenticate = async()  => {
            axios.post("http://192.168.137.1:80/new/save.php",JSON.stringify
                ({
                    nom:nom,
                    prenom:prenom,
                    email:email,
                    password:password,
                    repassword:repassword,  
                })
            )
            .then((response) => 
            {
                if(response.data.result=="yes")
                {
                    Alert.alert('Compte ajouté', "Votre compte a créé avec succès", [{text: 'OK'}]);
                }
                else
                {
                    Alert.alert('OOPS', "Nom d'utilisateur ou mot de passe est déja existe", [{text: 'OK'}]);
                }
                setisSubmit(false);})
            .catch((err) => {
                alert(err);
            });
        };
        if (isSubmit) authenticate();
        },[isSubmit]);

        const check = ()=> {
        if(email.length==0 || password.length==0 || repassword==0 || nom.length==0 || prenom.length==0)
        {
            Alert.alert('OOPS', 'Tous les champs doivent être remplit', [{text: 'OK' }]);
            return;
        }
        else if(password!=repassword)
        {
            Alert.alert('OOPS', "c'est pas le même mot de passe ", [{text: 'ok'}]);
            return;
        } 
        else 
        {
            setisSubmit(true);
           
        }
    }
    return(
        <ImageBackground source={ require('../assets/images/theme1.jpg')} style={styles.image}>

        <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
            <View style={styles.container}>
            <Text style={styles.title}>Créer votre compte </Text>
                <FormInput
                    labelValue={nom}
                    onChangeText={(nom) => setnom(nom)}
                    placeholderText="Nom"
                    iconType="user"
                />
                 <FormInput
                    labelValue={prenom}
                    onChangeText={(prenom) => setprenom(prenom)}
                    placeholderText="Prénom"
                    iconType="user"
                />
                <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
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
                <FormInput
                    labelValue={repassword}
                    onChangeText={(userrePassword) => setrePassword(userrePassword)}
                    placeholderText="Confirmer Mot de passe"
                    iconType="lock"
                    secureTextEntry={true}
                />
        
                <FormButton
                    buttonTitle="Inscription"
                    onPress={check}
                />
            </View>
        </TouchableWithoutFeedback>
                    </ImageBackground>

    )
}

const styles=StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        
      },
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
         fontSize: 30,
         fontWeight: 'bold',
         marginBottom:20
    },
    input:{
        width:300,
        padding:10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginTop:10
    }
})
