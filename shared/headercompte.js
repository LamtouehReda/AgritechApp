import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
export default function HeaderCompte() {

  return (
      <View style={styles.header}>
        <Image source={require('../assets/l.png')} size={100} style={styles.headerImage} />
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop:-10,
    flexDirection: 'row',
  },
  headerImage: {
    width: 70,
    height: 50,
    marginLeft:145,
    marginHorizontal: 145,
  },
  icon:{
      marginLeft:10,
      marginTop:10
  }
});