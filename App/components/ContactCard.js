import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


    

const handleEmailPress = (x) => {
  const email = x;
  const subject = 'Your email subject';
  const body = 'Your email body';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  Linking.openURL(mailtoUrl);
};

    

const handlePhonePress = (x) => {
  const tel = `tel:${x}`;
  Linking.openURL(tel);
};

const ContactCard = ({ header, body, footer, image, phone, email }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={{height:100, width:100,borderRadius:100,borderWidth:2,borderColor:'#85220f',marginBottom:5,}} source={{uri : image}} />
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={styles.btnAction}>
              <FontAwesome name={'phone'} size={20} color={'#fff'} onPress={() => handleEmailPress(phone)}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAction} onPress={() => handleEmailPress(email)}>
              <FontAwesome name={'envelope-o'} size={20} color={'#fff'} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowOffset: { width: 1, height: 1 }, // Shadow for iOS
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection:'column',
    justifyContent:'space-between',
    marginBottom:26,
    borderWidth:1,
    borderColor:'#85220f',

    width:150,
    height:200,
    margin:10,
  },
  header: {
    paddingTop: 10,
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:5,
    alignItems:'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign:'center',
  },
  body: {
    alignItems:'center',
    justifyContent:'center',
  },
  footer: {
    flexDirection:'row',
    backgroundColor:'#85220f',
    padding: 5,
    alignItems:'center',
    width:'100%',
    justifyContent:'space-evenly',
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8,
    marginTop:5,
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
  },
  btnAction:{
    // backgroundColor:'yellow',
  },  
});

export default ContactCard;
