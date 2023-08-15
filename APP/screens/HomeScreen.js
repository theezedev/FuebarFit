import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CurrentDate from '../components/CurrentDate';
import DailyButton from '../components/DailyButton';

const HomeScreen = ({ navigation }) => {

  const [jsonWorkouts, setJsonWorkouts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const dataFromStorage = await AsyncStorage.getItem('jsonWorkouts');
      if (dataFromStorage) {
        setJsonWorkouts(JSON.parse(dataFromStorage));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRandomSubWorkout = (parentCategory) => {
    const subWorkouts = jsonWorkouts[parentCategory];
    const subWorkoutKeys = Object.keys(subWorkouts);
    const randomIndex = Math.floor(Math.random() * subWorkoutKeys.length);
    return subWorkoutKeys[randomIndex];
  };

  if (loading) {
    return (
      <View style={styles.container}>
        {/* Display loading indicator or message */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.topContainer}>
          <CurrentDate/>
        </View>
        <View style={styles.bottomContainer}>
          <DailyButton
            headerText="Upper: "
            workout={getRandomSubWorkout('Upper')}
          />
          <DailyButton
            headerText="Core: "
            workout={getRandomSubWorkout('Core')}
          />
          <DailyButton
            headerText="Lower: "
            workout={getRandomSubWorkout('Lower')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex:1,
    justifyContent:'center',
    backgroundColor:'#1a0933'
  },
  card:{
    backgroundColor:'#6c40bb',
    borderRadius:10,
  },
  topContainer: {
    height:60,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor:'#e939b8',
    alignItems:'center',
    justifyContent:'center',
  },
  bottomContainer: {
    padding:10,
  },
});

export default HomeScreen;
