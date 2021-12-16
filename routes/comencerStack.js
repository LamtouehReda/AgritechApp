import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Commencer from '../screens/comencer';
import Objectifs from '../screens/objectifs';
import Connect from '../screens/connect';
import Inscription from '../screens/Inscription';
import Compte from '../screens/Compte';
import Header from '../shared/header';
import HeaderCompte from '../shared/headercompte'
import React, { Component } from 'react';
import {View,StyleSheet,ActivityIndicator,StatusBar} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const screens = {
  Compte:{
    screen: Compte,
    navigationOptions:{
      headerTitle: () => <HeaderCompte />,
      headerLeft:()=>null,
    }
  }
}
const screens2={
    Commencer: {
    screen: Commencer,
    navigationOptions:{
      headerShown:false
    }
  },
  Objectifs: {
    screen: Objectifs,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft:()=> null,
        headerTitle: () => <Header  navigation={navigation} />
      }
    },
  },
  Connect:{
      screen: Connect,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:()=> null,
          headerTitle: () => <Header  navigation={navigation} />
        }
      },
    },
  Inscription:{
    screen: Inscription,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft:()=> null,
        headerTitle: () => <Header  navigation={navigation} />
      }
    },
  },
}

const RootStack = createStackNavigator(screens);
const AuthStack=createStackNavigator(screens2);

class AuthLoadingScreen extends Component{
  
  constructor(props){
    super(props);
    this._LoadData();
  }
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
  _LoadData=async()=>{
  var value;
    try{
      AsyncStorage.getItem('isLoggeedIn').then((val)=>{value=val})
    }
    catch(error)
    {
      console.log(error)
    }
    this.props.navigation.navigate(value !=='1'? 'Auth' : 'App');
}
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading:AuthLoadingScreen,
    App:RootStack,
    Auth:AuthStack,
  },
  {
    initialRouteName:'AuthLoading'
  }
))

