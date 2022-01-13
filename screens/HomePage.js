
import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity,Text,
    ImageBackground,ScrollView } from 'react-native';
import Images  from '../Components/images';
import ScrollImage from './ScrollImage';
import ScrollImage1 from './ScrollImage1';
import datalist2 from './datalist2';


const HomePage = ({navigation}) => {
    
    return(
     <ScrollView >
        <View style={styles.container}>
      <ImageBackground source={Images.backgroundimg1}  style={styles.ImageBackgroundStyle}>
      <View style={styles.imgcontainer}>
      <Text style={styles.text}>welcome to Second Consuit !</Text>
      <Text style={styles.text}>It look you haven't had</Text>
      <Text style={styles.text}>a consultation yet</Text>
      </View>
     
        </ImageBackground>

        <Image style={styles.imgchat} source={Images.imgchat}/>
        <Image style={styles.imgAudio} source={Images.imgchat}/>
        <Image style={styles.imgVideo} source={Images.imgchat}/>
      
      <View>
      <Text style={styles.textChat}>Chat</Text>
     <Text style={styles.textChat1}>Chat with doctor</Text>
      </View>
      <View>
      <Text style={styles.textAudio}>Audio</Text>
      <Text style={styles.textAudio1}>Audio Consultation</Text>
      </View>
      <View>
      <Text style={styles.textVideo}>Video</Text>
      <Text style={styles.textVideo1}>Video Consultation</Text>
      </View>
    </View>
        <View style={styles.cardView}>
          <View style={styles.imageBackground}>
              <ImageBackground source={Images.cardimg1} resizeMode="contain" style={styles.image1}>
                  <TouchableOpacity style={styles.buttonView}>
                      <Text style={styles.buttonText}>Get Second Opinion</Text>
                  </TouchableOpacity>
              </ImageBackground>
          </View>
          <View style={styles.imageBackground1}>
              <ImageBackground source={Images.cardimg2} resizeMode="contain" style={styles.image2}>
                  <TouchableOpacity style={styles.buttonView1}>
                      <Text style={styles.buttonText1}>Subcribe Now</Text>
                  </TouchableOpacity>
              </ImageBackground>
          </View>
        </View>
          <View>
          <Text style={styles.textDoctors}>Find Doctors in top specialities</Text>
          </View>
          <View  style={styles.containerlist}> 
            <ScrollImage/> 
          </View>
            <View>
          <Text style={styles.textDoctors}>Consult with top doctors</Text>
          </View>
          <View  style={styles.containerlist1}> 
            <ScrollImage1/> 
            </View>
            <View style={styles.cardBackground}>
              <ImageBackground source={Images.cardimg3} resizeMode="contain" style={styles.cardimage}>
                  <TouchableOpacity style={styles.buttonView1}>
                      <Text style={styles.buttonText1}>Subcribe Now</Text>
                  </TouchableOpacity>
              </ImageBackground>
            </View>
            <View>
                <Text style={styles.textDoctors}>Health Articles</Text>
            </View>
          <View  style={styles.containerlist2}> 
              <ScrollView  horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                  {
                      datalist2.map(item=><View key={item.id} style={styles.svgcontainer}>
                          <View style={styles.svgview}>
                          <ImageBackground style={styles.coverImage}source={item.imguri }>
                          <View style={styles.textView}>
                        <Text style={styles.imageText}>{item.title}</Text>
                          </View>
                        </ImageBackground>
                          </View>      
                      </View>) 
                  }
              </ScrollView>
          </View>
   
    </ScrollView>
    );
  }

  export default HomePage;

  
  const styles = StyleSheet.create({
    cardView:{
      justifyContent: 'center', alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    container: {
      flex: 1, alignItems:'flex-end'
    },

    textAudio: {
      color: '#000',
      fontSize: 12,
      textAlign: 'center',
      width:50,
      top: -280,
      left: -230,
      fontWeight:'bold'
    }, 
    textAudio1: {
      color: '#918B8B',
      fontSize: 12,
      textAlign: 'center',
      width:200,
      top: -280,
      left: -220,
      marginLeft:-80
    }, 
    textVideo: {
      color: '#000',
      fontSize: 12,
      textAlign: 'center',
      width:50,
      top: -270,
      left: -20,
      fontWeight:'bold'
    }, 
    textVideo1: {
      color: '#918B8B',
      fontSize: 12,
      textAlign: 'center',
      width:200,
      top: -270,
      left: -90,
    }, 

    textChat: {
      color: '#000',
      fontSize: 12,
      textAlign: 'center',
      width:50,
      top:-240,
      right:-10,
      fontWeight:'bold'
    }, 
    textChat1: {
      color: '#918B8B',
      fontSize: 12,
      textAlign: 'center',
      width:100,
      top:-240,
      right:10,
    }, 

    imgchat: {
      height:150,
      width:150,
      top: 105,
      right: -10,
    },

    imgAudio: {
      height:150,
      width:150,
      top: -50,
      right: 250,
    },
    imgVideo: {
      height:150,
      width:150,
      top: -160,
      right: 120,
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
     width:250,
    }, 
    imgcontainer:{
      alignItems:'center',
      justifyContent: 'center',
    marginTop:150
    },
    ImageBackgroundStyle:{
      flex: 1,
      width: "100%",
      height: "100%",
      paddingVertical: 38,
      position: 'absolute',
      top:-160,
      resizeMode:'stretch'
    },
    backgroundview: { flex: 1,
     borderColor: '#000',borderwidth:10
    },  
    cardBackground:{
      marginTop:20,width: '96%', marginLeft:15, borderRadius: 20,     
    },
    cardimage: { width: '98%', height: 200, justifyContent: "center",
    },
    coverImage: {
      width: '98%',resizeMode: 'contain',borderRadius:20,height: 200,
    },
     imageText: {
      fontSize: 18, color: '#000',backgroundColor: 'white',opacity: 0.7,textAlign: 'right', 
      padding :10
    },
    textView: {
      position: 'absolute',top: 130,left: 0,right: 0, bottom: 0,
    },
    containerlist:{
     justifyContent: 'center', alignItems: 'center',height: 120, width: '100%',
     backgroundColor: '#F5FCFF',flex:1,
   },
   containerlist1:{
    justifyContent: 'center', alignItems: 'center',height: 250, width: '100%',flex:1,
  },
  containerlist2:{
    justifyContent: 'center', alignItems: 'center',height: 220, width: '100%',borderRadius:10,
    borderwidth:1,flex:1,
  },
    svgcontainer: {
      height: 200, width: 330,marginLeft:15,resizeMode: 'contain',justifyContent: 'center',
      borderRadius:10,flex:1,
  },
  svgtxtview: { 
      flex:1
  },
  svgtxt: { 
      fontSize: 15, color:'#000'
  },
    containerlist:{
        flex: 1, justifyContent: 'center', alignItems: 'center',
     },
   
    buttonView: {
      position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 100, left: 20,
      right: 130, bottom: 0, height:35, width:170, borderRadius:10, backgroundColor:"#40E0D0"
    },
    buttonView1: {
      position: 'absolute', justifyContent: 'center', alignItems: 'center', left: 170,    
      bottom: 30, height:35, width:150, borderRadius:10, backgroundColor:"#06066D"
    },
    buttonText:{
     fontWeight:'bold', fontSize: 15,color: '#000',
    },
    textDoctors:{
      fontWeight:'bold', fontSize: 15, color: '#000005', margin:15
     },
    buttonText1:{
      fontWeight:'bold', fontSize: 15, color: 'white',
     },
    imageBackground:{
      width: '96%', marginLeft:15, borderRadius: 20, borderColor: '#AED6F1',borderwidth:1,
      marginTop:-250
    },
    imageBackground1:{
      width: '93%',marginTop:8 ,
    },
    image: {
      flex: 1, justifyContent: "center"
    },
    image1: { width: '98%', height: 150, justifyContent: "center",
    },
    image2: { width: '100%', height: 150, justifyContent: "center",resizeMode: 'stretch'
    },
    MainContainer: {
      flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center',
      
    },
    cardViewStyle:{
      width: '95%',  height: 170,
    },
    cardView_InsideText:{
      fontSize: 20,  color: '#000', textAlign: 'center', marginTop: 50    
    },
    circleStyle:{
      position: 'absolute', top: 150, right: 10, elevation: 10,
    },
   
    img: {
      alignItems:'center', justifyContent: 'center', height:50, width:100, margin:20
    },
    
    text: {
      color: '#fff', fontSize: 18, width:250,textAlign: 'center'
    }, 
    
  });



