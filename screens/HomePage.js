
import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity,Text,
    ImageBackground,ScrollView } from 'react-native';
import Images  from '../Components/images';
import ScrollImage from './ScrollImage';
import ScrollImage1 from './ScrollImage1';
import datalist2 from './datalist2';


const HomePage = ({navigation}) => {
    
    return(
     <ScrollView style={styles.container}>
        <View style={styles.backgroundview}>
          <ImageBackground source={Images.backgroundimg1} style={styles.backgroundimg}>
              <View style={styles.imgcontainer}>
                <Text style={styles.text}>welcome to Second Consuit !</Text>
                <Text style={styles.text}>It look you haven't had</Text>
                <Text style={styles.text}>a consultation yet</Text>
              </View>
              <View style={styles.circleChat}>
                <Image style={styles.imgchat} source={Images.imgchat}/>
               </View>
     
     <View style={styles.circleAudio}>
     <Image style={styles.imgAudio} source={Images.imgchat}/>
     </View>
     <View style={styles.circlevideo}>
     <Image style={styles.imgVideo} source={Images.imgchat}/>
     </View>   
          </ImageBackground>
          </View>
          


          <View style={styles.imageBackground}>
              <ImageBackground source={Images.cardimg1} resizeMode="contain" style={styles.image1}>
                  <TouchableOpacity style={styles.buttonView}>
                      <Text style={styles.buttonText}>Get Second Opinion</Text>
                  </TouchableOpacity>
              </ImageBackground>
          </View>
          <View style={styles.imageBackground}>
              <ImageBackground source={Images.cardimg2} resizeMode="contain" style={styles.image1}>
                  <TouchableOpacity style={styles.buttonView1}>
                      <Text style={styles.buttonText1}>Subcribe Now</Text>
                  </TouchableOpacity>
              </ImageBackground>
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
    container: {
      flex: 1,
    },
    circleChat: {
      height: 60,
      width: 60,
      borderRadius: 50,
      position: 'absolute',
      top: 100,
      right: 30,
      elevation: 10,
      backgroundColor: '#ffffff',
    },
    circleAudio: {
      height: 60,
      width: 60,
      borderRadius: 50,
      position: 'absolute',
      top: 100,
      left: 30,
      elevation: 10,
      backgroundColor: '#ffffff',
    },
    circlevideo: {
      height: 60,
      width: 60,
      borderRadius: 50,
      position: 'absolute',
      top: 130,
      left: 150,
      elevation: 10,
      backgroundColor: '#ffffff',
    },
    imgchat: {
      height:50,
      width:50,
    },

    imgAudio: {
      height:50,
      width:50,
      
    },

    imgVideo: {
    
      height:50,
      width:50,
     
    },
    backgroundimg: {
      width:'100%', alignItems:'center', resizeMode: 'contain', justifyContent: 'center', 
      height:210 ,borderColor: '#000',borderwidth:5, 
    },
    backgroundview: {
     borderColor: '#000',borderwidth:10
    },

    imgview: {
      top: -130,left:20 ,
    },
    Audioview: {
      top: -250,left:130
    },
    videoview: {
      top: -500,left:250
    },
    imgchat: {
      alignItems:'center', justifyContent: 'center', height:150, width:100, 
    },
    imgAudio: {
      alignItems:'center', justifyContent: 'center', height:150, width:100, 
    },
    imgVideo: {
      alignItems:'center', justifyContent: 'center', height:150, width:100,
    },
    imgcontainer:{
      flex: 1, marginTop:20,borderColor: '#000',borderwidth:10
    },
    
    cardBackground:{
      marginTop:20,width: '100%', marginLeft:5, borderRadius: 20,      
    },
    cardimage: { width: '98%', height: 200, justifyContent: "center",
    },
    coverImage: {
      width: '100%',resizeMode: 'contain',borderRadius:20,height: 200,
    },
     imageText: {
      fontSize: 18, color: '#000',backgroundColor: 'white',opacity: 0.7,textAlign: 'right', 
      padding :10
    },
    textView: {
      position: 'absolute',top: 130,left: 0,right: 0, bottom: 0,
    },
    containerlist:{
     justifyContent: 'center', alignItems: 'center',height: 120, width: '98%',borderColor: '#AED6F1',
      backgroundColor: '#F5FCFF',borderRadius:10,borderwidth:1
   },
   containerlist1:{
    justifyContent: 'center', alignItems: 'center',height: 250, width: '98%',borderRadius:10,
    borderwidth:1
  },
  containerlist2:{
    justifyContent: 'center', alignItems: 'center',height: 220, width: '98%',borderRadius:10,
    borderwidth:1
  },
    svgcontainer: {
      height: 200, width: 300,marginLeft:20,resizeMode: 'cover',justifyContent: 'center',
      borderRadius:10
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
    flatview: {
      justifyContent: 'center', paddingTop: 30, borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana', fontSize: 18
    },
    email: {
      color: 'red' 
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
      width: '98%', marginLeft:10, borderRadius: 20,      borderColor: '#AED6F1',borderwidth:1
    },
    image: {
      flex: 1, justifyContent: "center"
    },
    image1: { width: '98%', height: 150, justifyContent: "center",
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
    textChat: {
      color: '#000', fontSize: 12, textAlign: 'center', width:50, top: -40, left: 260,
      fontWeight:'bold'
    }, 
    textChat1: {
      color: '#918B8B', fontSize: 12, textAlign: 'center', width:100, top: -40, left: 240,
      marginRight:30
    }, 
    textAudio: {
      color: '#000', fontSize: 12, textAlign: 'center', width:50,top: -100,left: -90,
      fontWeight:'bold'
    }, 
    textAudio1: {
      color: '#918B8B', fontSize: 12, textAlign: 'center', width:200, top: -100, left: -90,
      marginLeft:-80
    }, 
    textVideo: {
      color: '#000', fontSize: 12,textAlign: 'center', width:50, top: 30,  left: -95,  
      fontWeight:'bold'
    }, 
    textVideo1: {
      color: '#918B8B', fontSize: 12, textAlign: 'center', width:200, top: 30, left: -90,
       marginLeft:-80
    }, 
  });



