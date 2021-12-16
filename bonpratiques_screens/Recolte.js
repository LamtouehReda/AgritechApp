import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function Recolte() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/recolte.jpg')} />
        <Text style={styles.text}>
          La qualité des produits est aussi tributaire de l’application de
          protocoles acceptables pour la récolte, le stockage et, le cas
          échéant, la transformation des produits agricoles. La récolte doit
          respecter les règlements concernant l’intervalle avant la récolte pour
          les produits agrochimiques et les délais d’attente pour les
          médicaments vétérinaires. Les denrées alimentaires devraient être
          stockées dans des conditions appropriées de température et d’humidité,
          dans des espaces conçus et réservés à cette fin. Les opérations
          concernant les animaux, comme la tonte et l’abattage, doivent
          respecter les normes de santé et de bien-être. Les bonnes pratiques
          agricoles consisteront à:{'\n'} <Text style={styles.text1}> • Récolter les produits alimentaires en
          respectant les intervalles avant la récolte et les délais d’attente
          pertinents.{'\n'} • Assurer une manipulation propre et sûre pour la
          transformation sur l’exploitation des produits. Utiliser les
          détergents recommandés et de l’eau propre pour le lavage.{'\n'} • Stocker
          les produits alimentaires dans des conditions d’hygiène et
          d’environnement appropriées.{'\n'} • Conditionner les produits alimentaires
          destinés à être transportés hors de l’exploitation dans des emballages
          propres et appropriés.{'\n'} • Utiliser des modes de contention avant
          l’abattage et des méthodes d’abattage qui soient humains et appropriés
          à chaque espèce, en veillant notamment à la supervision et à la
          formation du personnel ainsi qu’à l’entretien nécessaire du matériel.{'\n'}
          • Tenir des registres exacts sur la récolte, le stockage et la
          transformation.
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
    borderColor: '#63570A',
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
