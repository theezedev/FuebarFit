import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentDateScreen = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are 0-based, so we add 1
  const day = currentDate.getDate();

  // Format month and day to have leading zeroes if needed
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  const formattedDate = `${formattedMonth}-${formattedDay}-${year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color:'#fff',
    fontWeight:'bold',
  },
});

export default CurrentDateScreen;
