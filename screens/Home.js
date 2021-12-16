import React from 'react'
import { Text,View,Image} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Principal from './principal'
import Statistique from './statistique'

const TabNavigator = createBottomTabNavigator({
  Principal:{
      screen: Principal,
      tabBarOptions:{},
      navigationOptions:{
        tabBarLabel:'',
        tabBarIcon: ()  => (
        <Image source={
        require('../assets/images/home.png')}
        resizeMode="contain" 
        style={{ width: 20, height: 20 }}/>)
      }},
      
  Statistique:{
    screen: Statistique,
    navigationOptions:{
      tabBarLabel:'Statistiques',
      tabBarIcon: ()  => (
      <Image source={
      require('../assets/images/statistiques.png')}
      resizeMode="contain" 
      style={{ width: 20, height: 20 }}/>)
    }},

    },{
        tabBarOptions:{
            labelStyle:{
                fontSize:15
            }
        }
    
});

export default createAppContainer(TabNavigator);
