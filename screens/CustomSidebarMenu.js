// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import { SafeAreaView,View, StyleSheet, Image, Text, TouchableOpacity,} from 'react-native';
import {  DrawerContentScrollView,  DrawerItemList,  DrawerItem,} from '@react-navigation/drawer';
import images  from '../Components/images';


const CustomSidebarMenu = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
   
       <View style={styles.profileview}>
       <View style={{flex:1}}>
      <Image source={images.profileIcon} style={styles.sideMenuProfileIcon} />
      </View>
      <View style={{flex:2}}>
      <Text style={styles.profiletext}> Shruti Sharma </Text>
      <Text style={styles.profiletext1}> View and edit profile</Text>
      </View>
      </View>
      <View style={styles.linetxt}/>
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.appointmentsIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Appointments</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.medicalIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Medical Records</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.membershipIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Membership</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.linetxt}/>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.settingsIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Settings</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.helpIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Help Center</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.likeIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Like Us</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.customItem}>
        <TouchableOpacity style={styles.customStyle}>
        <Image source={images.doctorIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> Are you Doctor?</Text>
        </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customStyle:{
    flexDirection: 'row',
  },
    profileview:{
       flexDirection: 'row', alignItems: 'center' ,marginTop:20,marginBottom:20,
    },
    profiletext:{
        fontSize: 25, fontWeight:'bold',textAlign: 'left', color: '#000',justifyContent: 'center', 
        alignItems: 'center' , 
    } ,
    profiletext1:{
        fontSize: 16, textAlign: 'left', color: 'gray',justifyContent: 'center', 
        alignItems: 'center' ,
    } ,
    sideMenuProfileIcon: {
        resizeMode: 'center', width: 60, height: 60, borderRadius: 60 / 2, marginLeft:10,
    },
    iconStyle: {
        width: 20, height: 20, marginHorizontal: 5,  resizeMode:'contain'
    },
    textStyle: {
        fontSize: 16, textAlign: 'center', color: 'grey'
    },
    customItem: {
       padding: 16, flexDirection: 'row', alignItems: 'center',
    },
    linetxt: { 
        width:'95%',borderBottomColor: '#F1F2F3', borderBottomWidth: 2,
        
    }
});

export default CustomSidebarMenu;
