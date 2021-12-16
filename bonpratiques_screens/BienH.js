import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function BienH() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>

     <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/humains.jpg')} />
      <Text style={styles.text}>
        L’agriculture doit être économiquement viable pour être durable. Le
        bien-être socio-économique des agriculteurs, des ouvriers agricoles et
        de leur communauté locale en dépend. La santé et la sécurité sont aussi
        des préoccupations importantes pour ceux qui participent aux opérations
        agricoles. La vigilance et la diligence doivent être permanentes. Les
        bonnes pratiques agricoles consisteront à:{'\n'}<Text style={styles.text1}> • Orienter toutes les
        pratiques agricoles afin de parvenir à un équilibre optimal entre les
        buts économiques, environnementaux et sociaux.{'\n'} • Fournir aux ménages les
        revenus et la sécurité alimentaire nécessaires.{'\n'} • Respecter des
        procédures de sécurité du travail avec des horaires acceptables et
        l’aménagement de périodes de repos.{'\n'} • Donner des instructions aux
        ouvriers pour l’utilisation sûre et efficace des outils et des machines.{'\n'}
        • Payer des salaires raisonnables et ne pas exploiter les ouvriers,
        notamment les femmes et les enfants.{'\n'} • Se procurer si possible les
        intrants et les autres services auprès des commerçants locaux.
      </Text>
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
    flexDirection: 'column',
    borderWidth: 2,
    margin: 13,
    borderRadius: 15,
    borderColor: '#DC250C',
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius:13,
    borderTopLeftRadius: 14,
  },
  text:{
fontSize:16,
margin:13,
  },
   text1:{
fontWeight:'bold',
  },
});
