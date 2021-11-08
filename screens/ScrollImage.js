import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import datalist from './datalist';

class ScrollImage extends Component {

   
    render() {
        return (
        <ScrollView  horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
              {
                    datalist.map(item=><View key={item.id} style={styles.svgcontainer}>
                        <View style={styles.svgview}>
                        {item.imgsvg}
                        </View>
                        <View style={styles.svgtxtview}>
                        <Text style={styles.svgtxt}>{item.title}</Text>
                    </View>             
                    </View>) 
                }
            </ScrollView>
        );
    }
}
export default ScrollImage;

const styles = StyleSheet.create({
    containerlist:{
      marginTop: 50, justifyContent: 'center', alignItems: 'center',
      height: 120, width: '98%',borderColor: '#AED6F1',
      backgroundColor: '#F5FCFF',borderRadius:10,borderwidth:1
   },
    svgcontainer: {
      height: 120, width: 120, marginLeft: 10, borderWidth: 1, 
      borderColor: '#AED6F1' ,backgroundColor:'#D6EAF8',alignItems:'center',
      resizeMode: 'cover',justifyContent: 'center',borderRadius:10
  },
  svgview: { 
       flex: 2 ,alignItems:'center',justifyContent: 'center', resizeMode: 'cover',
       marginTop:10
  },
  svgtxtview: { 
      flex:1
  },
  svgtxt: { 
      fontSize: 15, color:'#000'
  }
  })