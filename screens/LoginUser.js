import React from 'react';
import {SafeAreaView,View,Text,TextInput,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Images  from '../Components/images';
import ButtonComponent  from '../Components/ButtonComponent';
import stylesComponent from '../Components/stylesComponent';

const LoginUser = ({navigation}) => {
  return(
    <SafeAreaView style={stylesComponent.container}>
         <View style={styles.loginlview}>
        <Image 
            style={stylesComponent.Logo} 
            source={Images.logoIcon} 
        />
        <Text style={stylesComponent.text}>Login User</Text>
        <Text style={stylesComponent.text1}>We will send on SMS with a confirmation {"\n"}code to this number</Text>
        <View style={stylesComponent.SectionStyle}>
          <Image
              source={Images.phoneimg} 
              style={stylesComponent.ImageStyle}
          />
          <TextInput
              style={stylesComponent.textinput}
              placeholder="Enter Phone Number"
              underlineColorAndroid="transparent"
              placeholderTextColor="#000" 
              keyboardType='numeric'
          /> 
        </View>
        
        <Text style={stylesComponent.text2}>A 6 digit OTP will be sent via SMS verify your</Text>
        <Text style={stylesComponent.text3}>mobile number & Email address !</Text>
        <ButtonComponent 
              btnTitle={'Submit'}
              onPress={() => navigation.navigate("HomePage")}
              style={stylesComponent.button}
        />
        <View style={stylesComponent.signupStyle}>
            <Text style={stylesComponent.textnewuser}>New User ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("PatientInformation")}>
                  <Text style={stylesComponent.textsignup}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </View>
        
   
    </SafeAreaView>
        );
  };  
  export default LoginUser;
  const styles = StyleSheet.create({
    loginlview:{
     flex:1, margin:30
    }
    });