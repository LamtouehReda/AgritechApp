import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
export default function Header( {navigation }) {

  const back = () => {
    navigation.goBack();
  }
  return (
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={back} style={styles.icon}/>
        <Image source={require('../assets/l.png')} size={100} style={styles.headerImage} />
        <Text></Text>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:100,
    marginTop:40,
    flexDirection: 'row',
  },
  headerImage: {
    width: 70,
    height: 50,
    marginLeft:115,
    marginHorizontal: 145,
  },
  icon:{
      marginLeft:10,
      marginTop:10
  }
});