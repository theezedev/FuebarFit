import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen1 from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();

// const HomeScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

const HomeScreen = () => (
  <HomeScreen1 />
);


const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
);

const BottomNav = () => {
  return (
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
            tabBarActiveTintColor: '#58ceb2',
            tabBarInactiveTintColor: 'gray',
            //Tab bar styles can be added here
            tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:50},
            tabBarLabelStyle:{paddingBottom:3},
        })}
    >
      <Tab.Screen name="FIT" component={HomeScreen} />
      <Tab.Screen name="LEADERBOARD" component={ProfileScreen} />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({

// });
export default BottomNav;
