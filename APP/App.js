import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import HomeScreen1 from "./screens/HomeScreen";


const Tab = createBottomTabNavigator();
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const HomeScreen = () => (
  // <HomeScreen1 />
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Fit Screen</Text>
  </View>
);


const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

// const upperArray = ['Push Ups', 'Lateral Raises', 'Shoulder Press', 'Dumbell Press'];
// const coreArray = [1, 2, 3, 4, 5];
// const lowerArray = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <NavigationContainer style={styles.navStyle}>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'FIT') {
                iconName = focused? 'home': 'home';
            } else if (route.name === 'SETTINGS') {
                iconName = focused ? 'gear' : 'gear';
            } else if (route.name === 'LEADERBOARD') {
                iconName = focused ? 'trophy' : 'trophy';
            } 
            
            return <FontAwesome name={iconName} size={size} color={color} />;

          },
          tabBarActiveTintColor: '#50508E',
          tabBarInactiveTintColor: 'gray',
          //Tab bar styles can be added here
          tabBarStyle:{
            paddingVertical: 5,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            backgroundColor:'white',
            position:'absolute',
            // height:100,
            ...Platform.select({
              ios: {
                height:100,
              },
              default:{
                height:80,
                height:80,
              }
            }),
            
          },
          tabBarLabelStyle:{paddingBottom:3},
        })}
        >
        <Tab.Screen name="FIT" component={HomeScreen} 
          options={{
            title: 'Fit',
            headerStyle: {
              backgroundColor: '#50508E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen name="LEADERBOARD" component={ProfileScreen} 
          options={{
            title: 'Leaderboard',
            headerStyle: {
              backgroundColor: '#50508E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen name="SETTINGS" component={SettingsScreen}
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#50508E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navStyle: {
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    display:'row',
  },

});
