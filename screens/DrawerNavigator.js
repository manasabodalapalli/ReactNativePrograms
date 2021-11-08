import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderHomePage from '../Components/HeaderHomePage'
import HomePage from './HomePage';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
    }}
    drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="HomePage" 
      component={HomePage} 
      
      options={({navigation, route}) => ({header:(props)=><HeaderHomePage  {...props} />})}
         
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;