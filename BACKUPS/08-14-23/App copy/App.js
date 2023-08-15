import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './MainNavigator'; // Create this component in the next step
import LoginScreen from "./screens/Login";
import CreateAccountScreen from './screens/CreateAccount';
// import AppNav from './screens/appNav';

const gloStyle = require('./style'); //Global Styles
const Stack = createStackNavigator();

export default function App() {
  return (    
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={LoginScreen}
          options={(props)=>({
            headerTitle: "",
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerShown: false
          })
        }/>
        <Stack.Screen 
          name='CreateAccount'
          component={CreateAccountScreen}
          options={(props)=>({
            headerTitle: "Create an Account",
            headerTitleStyle:{
              color:'#fff',
            },
            headerBackTitleStyle:{
              color:'#fff',
            },
            headerTintColor:{
              color:'#fff',
            },
            headerStyle: {
              backgroundColor: '#ea39b8',
              // color:'#fff',
            },
            
          })
        }/>
        {/* <Stack.Screen name='AppNav' component={AppNav} /> */}
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  btnSetup:{
    marginRigh:"10px",
  }
})