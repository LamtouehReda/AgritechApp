import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function ProdV() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/production_vegetale.jpg')}
      />
      <Text style={styles.text}>
        Les cultures annuelles ou pérennes, leurs cultivars et leurs variétés,
        sont choisies pour répondre aux besoins des consommateurs et des marchés
        locaux en fonction de leur aptitude au site et de leur rôle dans la
        rotation des cultures pour la gestion de la fertilité du sol, des
        ravageurs et des maladies et de leurs réponses aux intrants disponibles.
        Les cultures pérennes offrent des options à long terme et des
        possibilités de cultures intercalaires. Les cultures annuelles sont
        réalisées en séquences notamment avec les pâturages, pour optimiser les
        avantages biologiques des interactions entre les espèces et pour
        maintenir la productivité. Les parcours sont gérés pour maintenir le
        couvert végétal, la productivité et la diversité des espèces. La récolte
        de tous les produits végétaux ou animaux retire leur teneur en éléments
        nutritifs du site et ceux-ci doivent tôt ou tard être remplacés pour
        maintenir la productivité à long terme. Les bonnes pratiques agricoles
        consisteront à:{'\n'} <Text style={styles.text1}> • Sélectionner les cultivars et les variétés en pleine
        connaissance de leurs caractéristiques, y compris la réaction à l’époque
        des semis ou des plantations, la productivité, la qualité, les chances
        d\'écoulement sur les marchés, la résistance à la maladie et au stress,
        l’adaptabilité édaphique et climatique, et la réaction aux engrais et
        aux produits agrochimiques.{'\n'} • Alterner les cultures de façon à optimiser
        l’utilisation du travail et du matériel et à maximiser les bénéfices
        biologiques de la lutte contre les adventices grâce à des options
        faisant intervenir la concurrence, des moyens mécaniques, biologiques et
        des herbicides, à l’emploi de cultures non hôte afin de réduire le plus
        possible les maladies, et le cas échéant, à l’inclusion de légumineuses
        pour apporter une source biologique d’azote.{'\n'} • Appliquer des engrais
        organiques et minéraux, de manière équilibrée, selon des méthodes et un
        matériel appropriés et aux intervalles requis afin de remplacer les
        éléments nutritifs retirés par la récolte ou perdus pendant la
        production.{'\n'} • Maximiser les avantages de la stabilité des sols et des
        éléments nutritifs en recyclant les résidus végétaux et autres résidus
        organiques.{'\n'} • Intégrer l’élevage dans la rotation des cultures et
        utiliser le recyclage des éléments nutritifs fournis par le bétail en
        pâturage ou en stabulation pour accroître la fertilité de toute
        l’exploitation.{'\n'} • Etablir une rotation du bétail sur les pâturages pour
        permettre la repousse de ceux-ci dans de bonnes conditions.{'\n'} • Adhérer
        aux réglementations de sécurité et observer les normes de sécurité
        établies pour le fonctionnement du matériel et des machines utilisées
        pour la production végétale et fourragère.
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
    borderColor: '#C2D52A',
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

