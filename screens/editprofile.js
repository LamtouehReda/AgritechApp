import React,{useState,useEffect} from 'react';
import {View,Alert,TouchableWithoutFeedback,Text,Keyboard, TouchableOpacity,ImageBackground,TextInput,StyleSheet,} from 'react-native';
import FormButton from '../components/FormButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function EditProfile () {

    const [value,setvalue]=useState("");
    AsyncStorage.getItem('any_key').then((value)=>{setvalue(value);})

    const [email, setEmail] = useState("");
    const [country, setcountry] = useState("");
    const [city, setcity] = useState("");
    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [phone, setphone] = useState("");

    const [isSubmit,setisSubmit]=useState(false);
    useEffect(() => 
    {
        const modifier = async()  => 
        {
          axios.post("http://192.168.137.1:80/new/modif.php",JSON.stringify
                ({
                      email:email,
                      country:country,
                      city:city,
                      nom:nom,
                      prenom:prenom,
                      phone:phone,
                      value:value,
                })
            )
            .then((response) => 
            {
                if(response.data.result=="yes")
                {
                  Alert.alert('Modification enregistrée', 'votre compte est modifiée avec succés', [{text: 'OK' }]);
                  AsyncStorage.setItem('any_key',email);                                         
                }
                else{alert("data non saved")}
                setisSubmit(false);
            })
            .catch((err) => { alert(err); });
        };
        if (isSubmit) modifier();
    },[isSubmit]);

  
    const submit=()=>{  
      if( prenom.length==0 ||nom.length==0 || country.length==0 || city.length==0 || email.length==0 || phone.length==0)
      {
        Alert.alert('OOPS', 'Tous les champs doivent etre remplit', [{text: 'OK' }]);
      }
      else
      {
        setisSubmit(true)
      }
}
  return(
    <ImageBackground source={ require('../assets/images/theme1.jpg')} style={styles.image}>
    <TouchableWithoutFeedback onPress={() =>Keyboard.dismiss()}>
    <View style={styles.container}>
      <View sttyle={{margin:20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=> {}}>
            <View style={{height:100, width:100,borderRadius:15,justifyContent:'center',alignItems:'center',}}>
              <ImageBackground 
              source={require('../assets/images/profile.png')} 
              style={{height:100,width:100}}
              imageStyle={{borderRadius:15}}
              />
              <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                <Icon
                  name="camera"
                  size={35}
                  color="#3333"
                  style={{
                  opacity: 0.7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#fff',
                  borderRadius: 10}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>{value}</Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
              labelValue={prenom}
              onChangeText={(prenom) => setprenom(prenom)}
              placeholder="Prénom"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textInput}
          />
        </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          labelValue={nom}
          onChangeText={(nom) => setnom(nom)} 
          placeholder="Nom"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          labelValue={email}
          onChangeText={(email) => setEmail(email)} 
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="phone" size={20} />
        <TextInput
          labelValue={phone}
          onChangeText={(phone) => setphone(phone)}
          placeholder="Téléphone"
          placeholderTextColor="#666666"
          keyboardType='number-pad'
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="globe" size={20} />
        <TextInput
          labelValue={country}
          onChangeText={(country) => setcountry(country)}      
          placeholder="Pays"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <Icon name="map-marker-outline" size={20} />
        <TextInput
          labelValue={city}
          onChangeText={(city) => setcity(city)}  
          placeholder="Ville"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <FormButton
          buttonTitle="Enregistrer"
          onPress={submit}
        />
      </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  container: {
    flex: 1,
    marginTop:40,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    left:10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
        paddingLeft: 10,
    color: '#05375a',
  },
});
