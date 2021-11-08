import React, { Component } from "react";
import { Platform, StyleSheet, Image, Text, View, Dimensions, ScrollView,Button } from "react-native";
import images from './data';

const window = Dimensions.get('window').width;
export default class BackgroundCarousel extends Component {

    state ={
      active:0
    }

      change = ({nativeEvent}) =>{

        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
        this.setState({active:slide})
        }
      }

  render() {

    const {images} = this.props
    const {selectedindex} = this.state
    return (
      <View style={styles.container}>
         <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll = {this.change}>
         {
            images.map(item=><View key={item.id} style={styles.imagescontainer}>
                        <Image style={styles.svgview} source={item.imgUrl}>
                      
                        </Image>
                        <View style={styles.svgtxtview}>
                        <Text style={styles.svgtxt}>{item.title}</Text>
                        <Text style={styles.svgbody}>{item.body}</Text>
                        <Text style={styles.svgbody}>{item.body1}</Text>
                    </View>             
                    </View>) 
                }
         </ScrollView>
         <View style={styles.circleimg}>
         {
            images.map((item,i)=>(
            <Text key={item.id} 
              style={i==this.state.active ? styles.pagingactivetext:styles.pagingtext}>⬤</Text>
         ))}

         </View>
         
      </View>
   );
 }

}

const styles = StyleSheet.create({
  container: {
   height:'100%', width:'100%',backgroundColor:'#F8F9FC'
  },
  pagingtext:{
    color:'#888', margin:3
  },
  pagingactivetext:{
    color:'#10FCD8', margin:3,
  },
  circleimg:{ 
    position:'absolute',bottom:10,flexDirection:'row', alignSelf:'center'
  },
  svgcontainer: {
    width: 320, backgroundColor:'#F8F9FC',alignItems:'center',resizeMode: 'cover',
    justifyContent: 'center',borderRadius:10
},
svgview: { 
    flex:2,alignItems:'center',justifyContent: 'center', resizeMode: 'contain',
    width: 320,marginLeft: 10,
},
svgtxtview: { 
  flex:1,
},
svgtxt: { 
  fontSize: 18, color:'#062FF9', margin:10, textAlign: 'center',fontFamily:'varadana'
},
svgbody: { 
  fontSize: 18, color:'#000',textAlign: 'center'
},
buttonstyle: { 
  marginBottom:20,borderRadius:10
}
});