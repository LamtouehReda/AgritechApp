import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function ProdA() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Production_animale.jpg')}
      />
      <Text  style={styles.text}>
        L’élevage a besoin de l’espace, des aliments et de l’eau nécessaires
        pour le bien-être et la productivité des animaux. La tenue de registres
        sur les acquisitions des animaux d’élevage et les programmes de
        sélection assureront la traçabilité du type et de l’origine. Les taux de
        charge sont ajustés et des compléments alimentaires sont apportés, si
        nécessaire, au bétail se nourrissant sur les pâturages ou les parcours.
        Les contaminants chimiques et biologiques sont évités dans les aliments
        afin de maintenir la santé animale et/ou empêcher leur entrée dans la
        chaîne alimentaire. La gestion du fumier réduit le plus possible les
        pertes en éléments nutritifs et optimise les effets bénéfiques sur
        l’environnement. Les besoins en terre sont évalués afin d’assurer une
        superficie suffisante pour la production fourragère et l’élimination des
        déchets. Les bonnes pratiques agricoles consisteront à:{'\n'} <Text  style={styles.text1}> • Choisir le
        site des unités de bétail de façon à éviter les effets négatifs sur le
        paysage, l’environnement et le bien-être des animaux.{'\n'} • Eviter les
        contaminations biologiques, chimiques et physiques des pâturages, du
        fourrage, de l’eau et de l’atmosphère.{'\n'} • Surveiller fréquemment l’état
        du bétail et ajuster en conséquence les taux de charge, l’alimentation
        et l’approvisionnement en eau.{'\n'} • Concevoir, construire, choisir,
        utiliser et entretenir le matériel, les structures et les installations
        de manutention de manière à éviter les accidents et les pertes.{'\n'} •
        Empêcher que les résidus de médicaments vétérinaires et autres
        substances chimiques données dans les aliments pour animaux entrent dans
        la chaîne alimentaire.{'\n'} • Réduire au minimum l’utilisation non
        thérapeutique des antibiotiques.{'\n'} • Intégrer l’élevage et l’agriculture
        afin d’éviter les problèmes d’élimination de déchets, de pertes
        d’éléments nutritifs et d’émissions de gaz à effet de serre par un
        recyclage efficace des éléments nutritifs.{'\n'} • Adhérer aux réglementations
        de sécurité et observer les normes de sécurité fixées pour le
        fonctionnement des installations, du matériel et des machines utilisés
        pour la production animale.{'\n'} • Tenir des registres sur les acquisitions,
        la sélection, les pertes et les ventes d’animaux ainsi que sur les plans
        d’alimentation, les acquisitions et les ventes de produits
        d’alimentation.
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
    borderColor: '#85929E',
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
