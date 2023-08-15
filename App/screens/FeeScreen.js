import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const FeeScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.cherokeega.com/Clerk-of-Courts/_resources//Costschedule1121.pdf' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeeScreen;
