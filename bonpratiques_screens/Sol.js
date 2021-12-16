import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function Sol() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/sol.jpg')} />
      <Text style={styles.text}>
        La structure physique et chimique, l’activité biologique du sol sont des
        éléments fondamentaux pour assurer la durabilité de la productivité
        agricole et déterminent, dans leur complexité, la fertilité du sol. La
        gestion des sols maintiendra et améliorera leur fertilité en réduisant
        les pertes de sol, d’éléments nutritifs et de produits agrochimiques dus
        aux phénomènes d’érosion, de ruissellement et de lessivage dans les eaux
        de surface ou les nappes phréatiques. Ces pertes représentent une
        gestion inefficace et non durable de ces ressources, outre leurs effets
        délétères possibles à distance. La gestion cherche aussi à favoriser
        l’activité biologique du sol et à protéger la végétation naturelle et la
        faune sauvage de l’environnement. Les bonnes pratiques agricoles
        consisteront à:{'\n'}<Text style={styles.text1}> • Gérer les exploitations compte tenu des
        propriétés, de la répartition et des utilisations potentielles des sols,
        en tenant un registre des intrants et des produits de chaque unité de
        terre gérée.{'\n'} • Conserver ou améliorer les matières organiques des
        sols par des rotations de cultures qui renforcent les sols et des
        pratiques appropriées de labour mécanisé et de conservation.{'\n'} •
        Conserver le couvert du sol afin de réduire le plus possible les pertes
        dues à l’érosion éolienne et/ou hydrique.{'\n'} • Appliquer des produits
        agrochimiques et des engrais organiques et minéraux en quantité et en
        temps voulu, selon des méthodes appropriées aux exigences agronomiques
        et environnementales.
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
    borderColor: '#395834',
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  text: {
    fontSize: 16,
    margin: 13,
  },
  text1: {
    fontWeight: 'bold',
  },
});
