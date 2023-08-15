import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BootstrapCard = ({ header, body, footer }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <View style={styles.body}>
        <Text>{body}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{footer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 3, // Shadow for Android
    shadowOffset: { width: 1, height: 1 }, // Shadow for iOS
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    padding: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 5,
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default BootstrapCard;
