import React from 'react';
import { View, Text, StyleSheet, Button, Image,ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView >
        <View style={styles.container}>
            <Image style={styles.cocImage} source={{uri: 'https://static.wixstatic.com/media/f5b098_147dd9786b02406fa7c9e025db817912~mv2.jpg/v1/fill/w_268,h_268,al_c,lg_1,q_80,enc_auto/Untitled.jpg',}}/>
            <Text style={[styles.text, {fontWeight:'bold',}]}>Cherokee County Clerk of Courts App!</Text>
            <Text style={styles.text}>Brought to you by Patty Baker</Text>
            <Text style={styles.text}>Access essential court information and services right at your fingertips. Stay updated on court proceedings, case details, and more with our user-friendly interface.</Text>
            <Text style={styles.text}>We're here to make your experience with the court system more convenient and efficient. Explore the app and discover how it can streamline your interactions with the Cherokee County Clerk of Courts.</Text>
            <Text style={styles.text}>Thank you for choosing our app. We're dedicated to serving you better.</Text>

            <Text>- The Cherokee County Clerk of Courts Team</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
  },
  cocImage:{
    height:150,
    width:150,
    borderRadius:100,
    borderWidth:2,
    borderColor:'#85220f',
    marginBottom:15,
  }
});

export default HomeScreen;
