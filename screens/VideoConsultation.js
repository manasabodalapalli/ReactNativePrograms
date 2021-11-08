
import React from 'react';
import {StyleSheet,SafeAreaView,Image ,View} from 'react-native';
import Images  from '../Components/images';
import ButtonComponent  from '../Components/ButtonComponent';
import BackgroundCarousel from './BackgroundCarousel'
import data from './data';


  const VideoConsultation = ({navigation}) => {

    return(
      <SafeAreaView style={styles.container}>
      <Image style={styles.Logo}
      source={Images.logoIcon} />
       <View style={styles.carouselview}>
       <BackgroundCarousel images = {data}></BackgroundCarousel>
       </View>
       <View style={{flex:1}}>
     <ButtonComponent btnTitle={'Get Started'}
     onPress={() => navigation.navigate("LoginUser")}>
     </ButtonComponent>
     </View>
      </SafeAreaView>
          );
}
 
export default VideoConsultation;

const styles = StyleSheet.create({
  container:{
   flex:1, backgroundColor:'#FAFDFC'
  },
  carouselview:{
      width:'95%', margin:10,flex: 4,alignItems:'center',justifyContent: 'center', 
      resizeMode: 'cover',marginTop:10 
  },
  image: {
    width: 10, height: 10, borderColor: 'red', borderWidth: 2, borderRadius: 75
  },
  text: {
    color: '#4B63B6', textAlign: 'center', alignItems: 'center', fontSize: 18, marginTop:15,  
  },
  text1: {
    color: '#57585C',textAlign: 'center', alignItems: 'center', fontSize: 18, marginTop:15,  
  },
  Logo: {
    height: 50, width: 80, marginLeft:20, marginTop:20, borderColor:"#000"
  },
  imageIcon:{
    marginLeft:50, alignItems:'center', justifyContent:'center',
  },

});