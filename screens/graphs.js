import React from "react";
import {ImageBackground, View,StyleSheet,SafeAreaView } from "react-native";
import Carousel from 'react-native-snap-carousel';
import Graph from "./graph";

export default class Graphs extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Temperature",
              text: "Text 1",
              graphdata:[1,2,3,4,5,6,7],
              color:'#52eb34',
              grad:'#ffa726',
              img: require('../assets/temp.png'),
          },
          {
              title:"PH",
              text: "Text 2",
              graphdata:[1,2,3,4,5,6,7],
              color:'#deeb34',
              grad:'#ffa726',
              img: require('../assets/ph-meter.png'),
          },
          {
              title:"Himudite",
              text: "Text 3",
              graphdata:[1,2,3,4,5,6,7],
              color:'#34deeb',
              grad:'#34deeb',
              img: require('../assets/humidity.png'),
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={styles.container}>
            <Graph img={item.img} data={item.graphdata} title={item.title} color={item.color} grad={item.grad}></Graph>
          </View>
        )
    }

    render() {
        return (
<ImageBackground source={ require('../assets/images/theme4.jpg')} style={styles.image1}>
          <SafeAreaView style={{flex: 1, paddingTop: 50 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  // ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  // onSnapToItem = { index => this.setState({activeIndex:index}) } 
                />
            </View>
          </SafeAreaView>
          </ImageBackground>

        );
    }
}
const styles=StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
  },
  container:{
    left:10,
    right:10,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
})
