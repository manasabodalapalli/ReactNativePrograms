import React, { Component } from "react";
import { ScrollView, StyleSheet, Image, Text, View, Dimensions, FlatList,Button } from "react-native";
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
   height:'100%', backgroundColor:'#F9FCFB',alignItems:'center',justifyContent: 'center', 
   width:'80%'
  },
  imagescontainer:{
    height:'100%', backgroundColor:'#F9FCFB',alignItems:'center',justifyContent: 'center', 
    marginLeft:9
  },
  pagingtext:{
    color:'#888', margin:3
  },
  pagingactivetext:{
    color:'#10FCD8', margin:3,
  },
  circleimg:{ 
    position:'absolute',bottom:15,flexDirection:'row', alignSelf:'center',marginTop:20
  },
  svgcontainer: {
    backgroundColor:'#F8F9FC',alignItems:'center',resizeMode: 'contain',
    justifyContent: 'center',borderRadius:10
},
svgview: { 
    flex:2,alignItems:'center',justifyContent: 'center', resizeMode: 'contain',
   
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