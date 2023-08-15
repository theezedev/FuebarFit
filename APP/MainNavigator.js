import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from './components/SideMenu'; // Create this component for your side menu
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const jsonWorkouts = {"Upper":{"Push-ups":{"type":"Default","status":"Enabled"},"Lateral Arm Raises":{"type":"Default","status":"Enabled"},"Kneeling Archer Push-ups":{"type":"Default","status":"Enabled"},"Diamond Press-ups":{"type":"Default","status":"Enabled"},"Hindu Push-ups":{"type":"Default","status":"Enabled"},"Triceps Extensions":{"type":"Default","status":"Enabled"}},"Core":{"Sit-ups":{"type":"Default","status":"Enabled"},"Mountain Climbers":{"type":"Default","status":"Enabled"},"Crunches":{"type":"Default","status":"Enabled"},"Reverse Crunches":{"type":"Default","status":"Enabled"},"Leg Raises":{"type":"Default","status":"Enabled"},"Bicycle Crunches":{"type":"Default","status":"Enabled"}},"Lower":{"Squats":{"type":"Default","status":"Enabled"},"Squats to Oblique Crunches":{"type":"Default","status":"Enabled"},"Glute Bridge Marches":{"type":"Default","status":"Enabled"},"Single-Leg Glute Bridges":{"type":"Default","status":"Enabled"},"Lunges":{"type":"Default","status":"Enabled"},"Reverse Lunges":{"type":"Default","status":"Enabled"},"Good Mornings":{"type":"Default","status":"Enabled"},"Fire Hydrants":{"type":"Default","status":"Enabled"},"Donkey Kicks":{"type":"Default","status":"Enabled"}}};

const gloStyles = require('./style'); //Global Styles
const Drawer = createDrawerNavigator();

const MainNavigator = () => {

    useEffect(() => {
        checkAndSaveData();
    }, []);
    const checkAndSaveData = async () => {
        try {
          const existingData = await AsyncStorage.getItem('jsonWorkouts');
          if (!existingData) {
            await AsyncStorage.setItem('jsonWorkouts', JSON.stringify(jsonWorkouts));
            console.log('JSON data saved successfully.');
          } else {
            console.log('JSON data already exists. Skipping save.');
          }
        } catch (error) {
          console.error('Error checking/saving JSON data:', error);
        }
      };
    return (

        <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />} screenOptions={{backgroundColor:'#1a0933',contentContainerStyle: { padding: 16 }}} >
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title: 'Dailies', // Custom title for the header
                    headerStyle: {
                        backgroundColor: '#6c40bb', // Custom background color
                        borderBottomWidth:3,
                        borderBottomColor:'#ea39b8',
                    },
                        headerTintColor: '#fff', // Text color for header buttons
                        headerTitleStyle: {
                        fontWeight: 'bold', // Custom title text style
                    },
                }}
                
            />
            <Drawer.Screen 
                name="Workouts" 
                component={WorkoutScreen} 
                options={{
                    title: 'Workouts', // Custom title for the header
                    headerStyle: {
                        backgroundColor: '#6c40bb', // Custom background color
                        borderBottomWidth:3,
                        borderBottomColor:'#ea39b8',
                    },
                        headerTintColor: '#fff', // Text color for header buttons
                        headerTitleStyle: {
                        fontWeight: 'bold', // Custom title text style
                    },
                }}
            />
            {/* Add more screens here */} 
        </Drawer.Navigator>
    );
};

export default MainNavigator;
