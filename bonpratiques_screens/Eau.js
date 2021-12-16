import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';

export default function Eau() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>
    <ScrollView>
         

     <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/eau.jpg')} />
      <Text style={styles.text}>
        L’agriculture porte une lourde responsabilité dans la gestion des
        ressources en eaux en termes quantitatifs et qualitatifs. Une gestion
        attentive des ressources en eaux et une utilisation efficiente de l’eau
        pour la production agricole et pastorale non irriguée, pour l’irrigation
        s’il y a lieu, et pour l’élevage, sont des critères de bonnes pratiques
        agricoles. Elles consistent notamment à optimiser l’infiltration de
        l’eau de pluie dans les terres agricoles, à conserver la couverture du
        sol afin d’éviter le ruissellement de surface et à réduire le plus
        possible le lessivage vers les nappes phréatiques. A cet effet, il
        importe de maintenir une structure adéquate du sol, y compris la
        présence permanente de macropores et les matières organiques du sol. Des
        méthodes et des technologies efficientes d’irrigation réduiront les
        pertes durant la fourniture et la distribution de l’eau d’irrigation en
        adaptant la quantité et le temps aux exigences agronomiques pour éviter
        un excès de lessivage et de salinisation. Les nappes phréatiques
        devraient être gérées de manière à éviter des hausses ou des baisses
        excessives. Les bonnes pratiques agricoles consisteront à:{'\n'}  <Text style={styles.text1}> • Optimiser
        l’infiltration de l’eau et réduire le plus possible les écoulements
        improductifs des eaux de surface des bassins versants.{'\n'} • Gérer les
        nappes phréatiques et l’eau du sol par une utilisation correcte, ou en
        évitant le drainage le cas échéant, et en renforçant la structure et les
        matières organiques du sol.{'\n'} • Appliquer les intrants de production, y
        compris les déchets ou les produits recyclés de nature organique,
        inorganique et synthétique selon des pratiques qui évitent la
        contamination des ressources en eau.{'\n'} • Adopter des techniques permettant
        de suivre l’état des cultures et de l’eau du sol, de programmer
        l’irrigation de manière rigoureuse et éviter la salinisation des sols,
        grâce à des mesures permettant d’économiser l’eau et la recycler le cas
        échéant.{'\n'} • Favoriser le déroulement du cycle hydrologique en établissant
        un couvert permanent du sol, ou en maintenant ou restaurant les terres
        humides le cas échéant.{'\n'} • Gérer les nappes phréatiques afin d’éviter une
        extraction ou une accumulation excessives.{'\n'} • Fournir des points d’eau
        suffisants, sûrs et propres pour le bétail.
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
    borderColor: '#08ABCC',
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

