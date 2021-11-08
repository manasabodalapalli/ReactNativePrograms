import   React from 'react';
import {StyleSheet,View,TouchableOpacity,Image} from 'react-native';
import images  from './images';

export default function HeaderHomePage({onPressButton,navigation}) {
   // console.log("WHATS HAPPENING HERE")
    
   onPressButton=()=> {  
    navigation.openDrawer();
    }   

    return ( 
        <View style={styles.container}>
        <View >
        <TouchableOpacity onPress={onPressButton}>
          <Image source={images.headerIcon}  style={styles.headermenuIcon} />
        </TouchableOpacity>
        </View>
      
       <Image
        source={images.img} style={styles.headerlogo} />
        <View style={styles.headerview}>
      <Image
        source={images.notificationIcon} style={styles.headerIcon} />
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container:{ 
        flexDirection: 'row', justifyContent: 'space-between',height: 50, 
        backgroundColor:'#051563',
    },
    container1:{ 
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
      height: 50, backgroundColor:'#FAFDFC'
  },
  Logo: {
      height: 20, width: 30, marginLeft:10, marginTop:20,
  },
    headermenuIcon:{
        height: 20, width: 20, marginTop:15,marginLeft:10
    },
    headerview:{
        flexDirection: 'row', backgroundColor:'#fff',width: 30, height: 30,
        borderRadius:10,justifyContent: 'center', alignItems: 'center',marginTop:10,marginRight:10
      },
      headerlogo:{
        width: 80, height: 40,marginTop:5,marginLeft:20
     },
     headerIcon:{
        height: 20, width: 20,
    },
      
    
});