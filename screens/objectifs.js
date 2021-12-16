import React,{useState,useRef} from 'react'
import { View,ImageBackground,StyleSheet ,FlatList,Animated} from 'react-native'
import slides from '../slides'
import OnboardingItem from './OnBoardingItem'
import FormButton from '../components/FormButton';

export default function Objectifs ({navigation}){
    const pressHandler = () => {
                navigation.push('Connect');
              }
    const[currentIndex,setcurrentIndex]=useState(0);

    const scrollX=useRef(new Animated.Value(0)).current;

    const slidesRef=useRef(null);

    const viewableItemsChanged=useRef(({viewableItems}) =>{
        setcurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current;

    return(
        <ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image}>

        <View style={styles.container}>
            <View style={{flex:0.8}}>
                <FlatList 
            
                data={slides} 
                renderItem={({ item }) => <OnboardingItem item={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                keyExtractor={(item) =>item.id}
                onscroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                    useNativeDriver:false,
                })}
                scrollEventthrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                />

             </View>
             <FormButton
              buttonTitle="Suivant"
              onPress={pressHandler}
            />
 
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
        
      },

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
   
    },
})