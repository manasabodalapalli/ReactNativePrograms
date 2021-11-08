import React from 'react';
import DrawerNavigator from './DrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Header from '../Components/Header'
import VideoConsultation from './VideoConsultation';
import LoginUser from './LoginUser';
import PatientInformation from './PatientInformation';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen 
            name="VideoConsultation" 
            component={VideoConsultation}
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="LoginUser" 
            component={LoginUser} 
            options={({navigation, route}) => ({header:(props)=><Header  {...props} />})}       
        />
        <Stack.Screen 
            name="PatientInformation" 
            component={PatientInformation} 
            options={({navigation, route}) => ({header:(props)=><Header  {...props} />})}       
        />
        <Stack.Screen 
            name="HomePage" 
            component={DrawerNavigator} 
            options={{ headerShown: false }} 
            //options={({navigation, route}) => ({header:(props)=><HeaderHomePage  {...props} />})}   
        />
      </Stack.Navigator>
  );
};
export default StackNavigator;