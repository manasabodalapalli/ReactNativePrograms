import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import datalist1 from './datalist1';


class ScrollImage1 extends Component {
    render() {
        return (
        <ScrollView  horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}style={styles.scrollcontainer}>
              {
                    datalist1.map(item=><View key={item.id} style={styles.svgcontainer}>
                        <View style={styles.svgview}>
                        <Image style={styles.profileimage}source={item.imguri }/>
                        </View>
                        <View style={styles.svgtxtview}>
                        <View style={styles.linetxt}/>
                        <Text style={styles.svgtxt}>{item.title}</Text>
                        <Text style={styles.svgtxt1}>{item.title1}</Text>
                    </View>             
                    </View>) 
                }
            </ScrollView>
        );
    }
}
export default ScrollImage1;

const styles = StyleSheet.create({
    scrollcontainer:{
        flex:1,width: '100%',marginLeft: 15,marginRight: 15,
    },
    svgcontainer: {
      height: 250, width: 210, marginLeft: 14, borderWidth: 1,marginRight: 16,
      borderColor: '#AED6F1' ,backgroundColor:'#fff',alignItems:'center',flex:1,
      resizeMode: 'cover',justifyContent: 'center',borderRadius: 10,
   },
    profileimage:{
    height: 100, width: 100,borderRadius: 200 / 2,margin:5,justifyContent:"center",
    alignItems:'center',
    },
  svgview: { 
       flex: 2,alignItems:'center',justifyContent: 'center', marginTop:10
  },
  svgtxtview: { 
      flex:1
  },
  svgtxt: {  
      fontSize: 16, color:'#000',marginLeft:10,fontWeight:'bold', 
  },
  svgtxt1: {  
    fontSize: 16, color:'#979B9B',marginLeft:10,
},
  linetxt: { 
    margin:5, width:190,borderBottomColor: '#F1F2F3', borderBottomWidth: 2,
    
}
  })