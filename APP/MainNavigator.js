import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import SideMenu from './components/SideMenu'; // Create this component for your side menu
import HomeScreen from './screens/HomeScreen';

const gloStyles = require('./style'); //Global Styles
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />} screenOptions={{contentContainerStyle: { padding: 16 },}}>
      <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Clerk of Courts', // Custom title for the header
                headerStyle: {
                    backgroundColor: '#fff', // Custom background color
                    borderBottomWidth:3,
                    borderBottomColor:'#85220f',
                },
                    headerTintColor: '#85220f', // Text color for header buttons
                    headerTitleStyle: {
                    fontWeight: 'bold', // Custom title text style
                },
            }}
        />
        <MainNavigator />   
      {/* Add more screens here */}
      <StatusBar />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
