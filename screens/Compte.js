import React,{Component,useEffect,useState} from 'react'
import {ImageBackground,StyleSheet,Image,View,SafeAreaView,ScrollView,Text,Button, Dimensions, TouchableOpacity} from 'react-native'
import Home from './Home'
import EditProfile from './editprofile'
import Contact from './contact'
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer"
import { createAppContainer, getActiveChildNavigationOptions } from 'react-navigation'
import BonPratiquestack from '../routes/bonpratiquestack'
import Apropos from './Apropos'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage  from '@react-native-async-storage/async-storage'
import Seuils from './Seuils'

var value=""
var nav;

export default function Compte({navigation}){
    nav=navigation  
    const  getData=()=>{
        try{
            AsyncStorage.getItem('any_key').then((val)=>{value=val})
        }catch(error){console.log(error)}
    }
    useEffect(() => {
        getData();
    }, []);
        const AppNavigator = createAppContainer(AppDrawerNavigator);
        return( <AppNavigator/> );
}

const CustomDrawerComponent=(props) =>(
    <SafeAreaView style={{flex:1}}>
            <ImageBackground source={ require('../assets/images/drawer.png')} style={styles.image1}>
            <View style={{
                height:150,
                flexDirection:"column",
                alignItems:'center',
                justifyContent:'center',
                marginTop:5
                }}>
                
                <Image source ={require("../assets/images/profile.png")} style={{height:100,width:100,
                borderRadius:100,borderColor:"green",borderWidth:5}}/>
                <Text style={styles.name}>Bienvenue {value} </Text>
            </View>
            </ImageBackground>
            <ScrollView >
                <DrawerItems {...props}/>
                <TouchableOpacity style={styles.btn}  onPress={()=>{AsyncStorage.clear();nav.navigate('Auth')}}>
                    <FontAwesome name="sign-out" size={20} style={{marginTop:10,marginRight:30}} />
                    <Text style={styles.name2}>Déconnexion</Text>
                </TouchableOpacity>       
            </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator =createDrawerNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Principale',
            drawerIcon:()=> <FontAwesome name="home" size={20} />
        }},
    Seuils:{
        screen:Seuils,
        navigationOptions:{
            title:'Parmètres',
            drawerIcon:()=>  <FontAwesome name="sliders" size={25}  />
        }},
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            title:'Modifier votre profile',
            drawerIcon:()=> <FontAwesome name="pencil-square-o" size={20} />
        }},
    Contact:{
        screen:Contact,
        navigationOptions:{
            title:'Contact',
            drawerIcon:()=> <FontAwesome name="envelope-o" size={20} />
        }},
    BonPratiquestack:{
        screen:BonPratiquestack,
        navigationOptions:{
            title:'Les bonnes pratiques',
            drawerIcon:()=> <FontAwesome name="star" size={20}  />
        }},
    Apropos:{
        screen:Apropos,
        navigationOptions:{
            title:'À propos de nous',
            drawerIcon:()=> <FontAwesome name="info" size={20} />
 
        }},

}, 
{
    contentComponent:CustomDrawerComponent,
     drawerWidth:Dimensions.get("window").width*0.85,
     hideStatusBar:true,
     contentOptions:{
         activeBackgroundColor:"rgba(22,228,111,0.2)",
         activeTintColor:"#531158",
         itemsContainerStyle:{
             margintTop:16,
             marginHorizontal:8
         },
         timeStyle:{
             borderRadius:4
         }
     } 
});

const styles=StyleSheet.create({
    image1: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    name:{
        marginTop:10,
        fontSize:20,
        fontWeight: 'bold',
        color: 'white'
    },
    name2:{
        marginTop:10,
        fontSize:15,
        fontWeight: 'bold',
        color: 'black'
    },
    btn:{
        flexDirection:'row',
        padding:10,
        marginLeft:20
    }
})