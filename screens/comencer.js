import React from 'react';
import { ImageBackground, StyleSheet, Text, View ,Image} from "react-native";
import FormButton from '../components/FormButton';

export default function Commencer({ navigation }){

    const pressHandler = () => {
        navigation.push('Objectifs');
      }

    return(
    <View style={styles.container}>
        <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image}>
        <View style={styles.content}>
            <Text style={styles.text}>Bienvenu sur votre assistant argonomie:</Text>
            <Image source={ require('../assets/l.png')} style={styles.logo}/>
            <FormButton
              buttonTitle="Commencer"
              onPress={pressHandler}
            />
        </View>
        </ImageBackground>
    </View>
);
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", 
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  text: {
    marginTop:10,
    marginBottom:10,
    color: "#3cb371",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    
  },

  content:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  }
});
