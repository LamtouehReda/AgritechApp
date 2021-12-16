import { LineChart} from "react-native-chart-kit";
import React from 'react'
import { View,Image,Dimensions,Text,StyleSheet } from "react-native";


export default function  Graph({valeurs,color,titre,axis,img}){
  return(
    <View>
      <View style={styles.titre}>
        <Image source={img} style={styles.image}/>
        <Text style={styles.text}>{titre}</Text>
      </View>
      <LineChart
        data={{
          labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam","Dim"],
          datasets: [
            {
              data: valeurs
            }
          ]
        }}
        width={300} // from react-native
        height={400}
        yAxisLabel={axis}
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: color,
          backgroundGradientTo: "#fb8c00",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />  
  </View>
  )
}
const styles=StyleSheet.create({
    titre:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center'
  },
  image:{
    width:30,
    height:30,
  },
    text:{
    fontSize:40,
fontWeight:'bold',
  },
})