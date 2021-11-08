
import { StyleSheet } from 'react-native';

const stylesComponent = StyleSheet.create({
    container:{
        flex:1, backgroundColor:'#FAFDFC'
       },
       signupStyle:{
         flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:10,
       },      
       image: {
         width: 10, height: 10, borderColor: 'red', borderWidth: 2, borderRadius: 75
       },
     text: {
       color: '#000', fontSize: 25, marginLeft:30, marginTop:30, fontWeight:'bold'
     },    
     text1: {
       color: '#57585C', fontSize: 16, marginTop:10, marginLeft:30,  
     },
     text2: {
       color: '#57585C', fontSize: 14, marginTop:20, textAlign: 'center', alignItems: 'center', 
     },
     text3: {
       color: '#57585C', fontSize: 14, marginTop:3, marginBottom:60, textAlign: 'center', 
       alignItems: 'center', 
     },
     textnewuser: {
      color: '#57585C', fontSize: 14,
    },
    textsignup: {
      color: '#051E7F',fontSize: 14,marginLeft:5, fontWeight:'bold'
    },
     Logo:{
       height: 50, width: 80, marginLeft:20, marginTop:20,
     },
     SectionStyle: {
       flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderWidth: 0.5,
       backgroundColor: '#FAFDFC', borderColor: '#57585C', height: 50, width:300,
       marginLeft:30, marginTop:30, color: '#000',
   },  
   textinput: {
     flex: 1,
   },
   ImageStyle: {
      padding: 10,margin: 10, height: 30,width: 13, resizeMode: 'stretch',
      alignItems: 'center',
   },
   button:{
     marginTop:30, marginBottom:30
   }
  });

export default stylesComponent;