import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.cherokeecourtclerk.com/forms' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FormScreen;
