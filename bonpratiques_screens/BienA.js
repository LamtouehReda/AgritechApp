import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function BienA() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>
     <ScrollView>
     
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/animaux.png')} />
        <Text style={styles.text}>
          Les animaux d’élevage sont dotés de sensibilité et, de ce fait leur
          bien-être doit être pris en compte. La qualité du bien-être des
          animaux se reconnaît à l’absence de faim et de soif, de gêne, de
          souffrance, de traumatisme ou de maladies; à la possibilité d’avoir un
          comportement normal; et à l’absence de peur ou de souffrance. Les
          bonnes pratiques agricoles consisteront à:{'\n'} <Text style={styles.text1}>• Fournir à tout moment des
          aliments et de l’eau propre en quantité et en qualité appropriées.{'\n'} •
          Eviter les mutilations non thérapeutiques, les procédures
          chirurgicales ou invasives, telles que l’amputation de la queue ou le
          débecquage.{'\n'} • Réduire le plus possible le transport des animaux
          vivants (à pied, par rail ou par route) et l’utilisation des marchés à
          bestiaux.{'\n'} • Manipuler les animaux avec l’attention voulue et éviter
          l’utilisation d’instruments tels que les aiguillons électriques.{'\n'} •
          Maintenir, si possible, les animaux dans des groupements sociaux
          appropriés; décourager l’isolement des animaux (tels que les cages
          pour les veaux et les stalles pour les truies), sauf en cas de
          blessure ou de maladie.{'\n'} • Respecter les allocations d’espace minimales
          et les taux de charge maximaux.
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
    borderColor: '#A77A0A',
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
