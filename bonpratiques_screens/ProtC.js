import React from 'react';
import { ImageBackground,View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function ProtC() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/protection_des_cultures.jpg')}
      />
      <Text style={styles.text}>
        Le maintien de la santé des plantes est essentiel pour une agriculture
        performante, tant sur le plan du rendement que de la qualité des
        produits. Il faut pour cela des stratégies à long terme de gestion des
        risques en utilisant des cultures résistantes aux maladies aux
        ravageurs, la rotation des cultures et des pâturages, des systèmes de
        protection des cultures vulnérables contre les maladies, et en utilisant
        le moins possible de produits agrochimiques pour lutter contre les
        adventices, les ravageurs et les maladies conformément aux principes de
        la protection intégrée. Toutes les mesures de protection des cultures,
        notamment celles faisant appel à des substances dangereuses pour les
        êtres humains ou l’environnement, ne doivent être appliquées qu’en
        pleine connaissance et avec le matériel voulu. Les bonnes pratiques
        agricoles consisteront à:{'\n'}<Text style={styles.text1}> • Utiliser des cultivars et des variétés
        résistantes, l’alternance des cultures, les associations et des façons
        culturales qui optimisent la prévention biologique des ravageurs et des
        maladies.{'\n'} • Evaluer de manière régulière et quantitative l’équilibre
        entre les ravageurs et les maladies d’une part et les organismes utiles
        d’autre part de toutes les cultures.{'\n'} • Adopter des pratiques de lutte
        biologique où et quand cela est possible.{'\n'} • Appliquer des techniques de
        prévision des ravageurs et des maladies, le cas échéant.{'\n'} • Décider des
        interventions après examen de toutes les méthodes possibles et de leurs
        effets à court et à long terme sur la productivité agricole et des
        incidences sur l’environnement afin de réduire le plus possible
        l’utilisation de produits agrochimiques, notamment de favoriser la
        protection intégrée contre les ravageurs (PI).{'\n'} • Stocker et utiliser les
        produits agrochimiques conformément aux dispositions légales
        d’homologation pour les différentes cultures, les taux d’application, le
        calendrier et les intervalles après récolte.{'\n'} • S’assurer que les
        produits agrochimiques ne sont appliqués que par un personnel compétent
        ayant reçu la formation voulue et compétent.{'\n'} • S’assurer que le matériel
        utilisé pour la manipulation et l’application des produits agrochimiques
        est conforme aux normes de sécurité et d’entretien établies.{'\n'} • Tenir des
        registres exacts sur l’utilisation des produits agrochimiques
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
    borderColor:'#1F7212'
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