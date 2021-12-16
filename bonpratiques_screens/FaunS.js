import React from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView, Image } from 'react-native';
export default function FaunS() {
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>
     <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/faune_sauvage.jpg')}
      />
      <Text  style={styles.text}>
        Les terres agricoles accueillent toute une gamme d’animaux, d’oiseaux,
        d’insectes et de plantes. Une grande partie de la préoccupation du
        public vis-à-vis de l’agriculture moderne concerne la disparition de
        certaines espèces dans le milieu rural du fait de la destruction de leur
        habitat. Le défi à relever est de gérer et de favoriser les habitats de
        la faune sauvage tout en conservant la viabilité économique des
        exploitations agricoles. Les bonnes pratiques agricoles consisteront à:{'\n'}<Text  style={styles.text1}>
        • Identifier et conserver les habitats de la faune sauvage et les
        éléments du paysage, comme par exemple les arbres isolés, sur
        l’exploitation.{'\n'} • Créer, dans la mesure du possible, un système de
        cultures différentes sur l’exploitation.{'\n'} • Réduire le plus possible
        l’impact des opérations comme le labour et l’utilisation de produits
        agrochimiques sur la faune sauvage.{'\n'} • Aménager des bordures autour des
        champs afin de réduire les plantes adventices nocives et de promouvoir
        une flore et une faune différentes avec des espèces utiles.{'\n'} • Gérer les
        cours d’eau et les terres humides afin de promouvoir la faune sauvage et
        d’éviter la pollution.{'\n'} • Surveiller les espèces végétales et animales
        dont la présence sur l’exploitation est le signe de bonnes pratiques
        écologiques.
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
    borderColor: '#E3D312',
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

