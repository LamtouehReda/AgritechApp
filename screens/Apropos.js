import * as React from 'react';
import { ImageBackground,Text, View, StyleSheet,Image,ScrollView } from 'react-native';

export default function Apropos() {
  return (
    <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image1}>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>À propos de nous </Text>
          <Image style={styles.image} source={require('../assets/LOGO.png')}/>
          <Text style={styles.text1}><Text  style={styles.text2}>YL.AGRI</Text>  est un service agronomique automatisé basé à Casablanca qui conçoit des solutions matérielles et logicielles intelligentes de IoT pour les agriculteurs. Ces solutions collectent et analysent des données de n'importe quel endroit pour aider les agriculteurs dans leur processus de prise de décision, offrant une meilleure efficacité et des choix plus intelligents dans l'entreprise agricole.
          </Text>
        </View> 
      </ScrollView>
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  container: {
    flex:1,
    flexDirection: 'column',
   alignItems:'center',
   justifyContent:'center',
   marginTop:30,
  },
  image: {
    width: 360,
    height: 260,
  },
  text:{
fontSize:40,
fontWeight:'bold',
color:'#0A5F13',
marginTop:5,
margin:13,
  },
   text1:{
fontSize:20,
padding:10,
marginLeft:10,
  },
   text2:{
fontWeight:'bold',
  },
});

