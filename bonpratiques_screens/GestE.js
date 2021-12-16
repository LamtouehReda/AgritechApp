import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function GestE() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/gestion_energie.jpg')}
      />
      <Text style={styles.text}>
        Les exploitations agricoles ont besoin de combustible pour le
        fonctionnement du matériel utilisé pour les opérations de culture, la
        transformation et le transport. L’objectif est d’effectuer les
        opérations en temps opportun, d’alléger le travail humain, d’améliorer
        l’efficacité, de diversifier les sources d’énergie et d’en réduire
        l’utilisation. L’agriculture génère des produits dérivés. Certains sont
        des polluants potentiels du sol, de l’eau et de l’air et leur production
        doit être réduite le plus possible tandis que d’autres sont des
        ressources qui peuvent être recyclées. Les bonnes pratiques agricoles
        consisteront à:{'\n'} <Text style={styles.text1}> • Etablir des plans entrée-sortie pour l’énergie
        agricole, les éléments nutritifs et les produits agrochimiques afin
        d’assurer un usage efficace et l’élimination sans danger.{'\n'} • Adopter des
        pratiques d’économie de l’énergie dans la conception des bâtiments, la
        taille du matériel, l’entretien et l’utilisation.{'\n'} • Rechercher des
        sources d’énergie autres que les combustibles fossiles (énergie
        éolienne, ou solaire, biocombustibles), et les adopter dans la mesure du
        possible.{'\n'} • Recycler les déchets organiques et les matières
        inorganiques, dans la mesure du possible.{'\n'} • Réduire le plus possible les
        déchets non utilisables et les éliminer de manière responsable.{'\n'} •
        Stocker les engrais et les produits agrochimiques de manière sûre et
        conformément à la législation en vigueur.{'\n'} • Etablir des procédures
        d’interventions d'urgence afin de réduire le plus possible les risques
        de pollution accidentelle.{'\n'} • Tenir des registres exacts sur
        l’utilisation de l’énergie, le stockage et l’élimination.
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
    borderColor: '#9012E3',
  },
  image: {
    width: "100%",
    height: 200,
     borderTopRightRadius:13,
    borderTopLeftRadius: 13,
   
  },
  text:{
fontSize:16,
margin:13,
  },
   text1:{
fontWeight:'bold',
  },
});


