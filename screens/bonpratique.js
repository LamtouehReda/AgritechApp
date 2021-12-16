import React from 'react';
import {View,ImageBackground, StyleSheet, Text, ScrollView, TouchableOpacity, Image,} from 'react-native';

export default function BonPratique({ navigation }) {
  const images = [
    { key: '1', img: require('../assets/sol.jpg'), titre: 'Sol' },
    { key: '2', img: require('../assets/eau.jpg'), titre: 'Eau' },
    {
      key: '3',
      img: require('../assets/production_vegetale.jpg'),
      titre: 'Production Végétale et Fourragère',
    },
    {
      key: '4',
      img: require('../assets/protection_des_cultures.jpg'),
      titre: 'Protection des Cultures',
    },
    {
      key: '5',
      img: require('../assets/Production_animale.jpg'),
      titre: 'Production Animale',
    },
    {
      key: '6',
      img: require('../assets/sante_animale.jpg'),
      titre: 'Santé Animale',
    },
    {
      key: '7',
      img: require('../assets/animaux.png'),
      titre: 'Bien-être des Animaux',
    },
    {
      key: '8',
      img: require('../assets/recolte.jpg'),
      titre: 'Récolte et Entreposage',
    },
    {
      key: '9',
      img: require('../assets/gestion_energie.jpg'),
      titre: 'Gestion de l’énergie et des déchets',
    },
    {
      key: '10',
      img: require('../assets/humains.jpg'),
      titre: 'Bien-être des Humains',
    },
    {
      key: '11',
      img: require('../assets/faune_sauvage.jpg'),
      titre: 'Faune Sauvage et Paysage',
    },
  ];
  return (
    <ImageBackground source={ require('../assets/images/theme5.jpg')} style={styles.image1}>

    <ScrollView>     
      {images.map((image, index) => {
        return (
          <View style={styles.container} key={index}>
            <Image style={styles.image} source={image.img} />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(image.titre)}>
              <View style={styles.item}>
              <Text style={styles.text}>{image.titre}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
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
    marginBottom: 5,
    borderRadius: 15,
    borderColor: '#0F8119',
    shadowColor: '#B0BDB1',
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  button: {
    height: 55,
    backgroundColor: '#0F8119',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#EDF3EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
   flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
