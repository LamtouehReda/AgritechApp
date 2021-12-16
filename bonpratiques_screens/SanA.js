import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function SanA() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/sante_animale.jpg')}
      />
      <Text style={styles.text}>
        Une production animale qui donne de bons résultats doit être attentive à
        la santé des animaux. Celle-ci est maintenue par une gestion et des
        bâtiments d\'élevage appropriés, par des traitements préventifs tels que
        la vaccination et par l’inspection régulière, l’identification et le
        traitement des affections, avec, le cas échéant, l’avis d’un
        vétérinaire. Les bonnes pratiques agricoles consisteront à:{'\n'} <Text style={styles.text1}> • Réduire le
        plus possible les risques d’infection et de maladie grâce à une bonne
        gestion des pâturages, une alimentation sans danger, des taux de charge
        appropriés et de bonnes conditions de logement.{'\n'} • Garder le bétail, les
        bâtiments et les installations d’alimentation dans de bonnes conditions
        de propreté et fournir des litières propres sous abri.{'\n'} • S’assurer que
        le personnel a la formation voulue pour la manipulation et le traitement
        des animaux.{'\n'} • Demander un avis vétérinaire approprié afin d’éviter les
        maladies et les problèmes de santé.{'\n'} • Assurer de bonnes normes d’hygiène
        dans les logements par les nettoyages et les désinfections nécessaires.{'\n'}
        • Traiter rapidement les animaux malades ou blessés en consultation avec
        un vétérinaire.{'\n'} • Acheter, stocker et utiliser uniquement des produits
        vétérinaires approuvés conformément aux réglementations et aux
        instructions, notamment les délais d’attente.{'\n'} • Conserver des registres
        détaillés sur toutes les maladies, les traitements médicaux et les
        mortalités.
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
    borderColor: '#072FB6',
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