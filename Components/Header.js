import   React from 'react';
import {StyleSheet,View,TouchableOpacity,Image} from 'react-native';
import Images  from './images';

export default function Header({onPressButton,navigation}) {
   // console.log("WHATS HAPPENING HERE")
    
   onPressButton=()=> {  
    navigation.goBack()
    }   

    return ( 
        <View style={styles.container}>
        <TouchableOpacity  style={{ padding: 10 }}onPress={onPressButton}>
          <Image style={styles.Logo}
                source={Images.backButton} />
        </TouchableOpacity>
        
      </View>
    );
  }


  const styles = StyleSheet.create({
    container:{ 
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
        height: 50, backgroundColor:'#FAFDFC'
    },
    Logo: {
        height: 20, width: 30, marginLeft:10, marginTop:20,
    },
});