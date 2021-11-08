
import   React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import DrawerNavigator from './screens/DrawerNavigator'
import StackNavigator from './screens/StackNavigator'
import Header from './Components/Header'
import HeaderHomePage from './Components/HeaderHomePage'
import VideoConsultation from './screens/VideoConsultation';
import LoginUser from './screens/LoginUser';
import PatientInformation from './screens/PatientInformation';
import HomePage from './screens/HomePage';






function App() {  
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}

export default App;




