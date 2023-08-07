import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import WorkoutRow from './components/WorkoutRow';

const upperArray = ['Push Ups','Dumbell Press'];
const coreArray = ['Sit Ups','Crunches/Leg Raises'];
const lowerArray = ['Squats','Fire Hydrants'];


const getRandomWorkout = (array) => {
    if (array.length === 0) {
        return ''; // Return an empty string if the array is empty
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

export default function HomeScreen() {


    return(
        <View>
            <WorkoutRow workoutName={getRandomWorkout(upperArray)} workoutType={'Upper'}/>;
            <WorkoutRow workoutName={getRandomWorkout(coreArray)} workoutType={'Core'}/>;
            <WorkoutRow workoutName={getRandomWorkout(lowerArray)} workoutType={'Lower'}/>;
        </View>
    );

};


