import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import ContactCard from '../components/ContactCard';
import AccordionButton from '../components/AccordionButton';

const gloStyle = require('../style'); //Global Styles


const peopleData = [
    {
      "image": "https://static.wixstatic.com/media/f5b098_e3958e6363b8444a84487f164cade25f~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/me.jpg",
      "name": "",
      "title": "",
      "email": "rnmanley@cherokeega.com",
      "phoneNumber": "678-493-6523",
      "department": "Passport and Notary Information"
    },
    {
      "image": "https://static.wixstatic.com/media/f5b098_e90edee504dc45268311d2a9c08603e8~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Julie%20West.jpg",
      "name": "",
      "title": "",
      "email": "jfwest@cherokeega.com",
      "phoneNumber": "678-493-6501",
      "department": "Superior Court Civil"
    },
    {
      "image": "https://static.wixstatic.com/media/f5b098_128b6ef7082849c98ccfc376b0ec0591~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bett%20Webb.jpg",
      "name": "",
      "title": "",
      "email": "bjwebb@cherokeega.com",
      "phoneNumber": "678-493-6555",
      "department": "State Court Civil"
    },
    {
      "image": "https://static.wixstatic.com/media/f5b098_b476d8ad6bf441b6b70f1cd19a52e212~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kelsey%20VanDine.jpg",
      "name": "",
      "title": "",
      "email": "krvandine@cherokeega.com",
      "phoneNumber": "678-493-6508",
      "department": "Superior Court Criminal"
    },
    {
      "image": "https://static.wixstatic.com/media/f5b098_b3feb6265b40472b867143ff510c1b01~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Karen%20Ho.jpg",
      "name": "",
      "title": "",
      "email": "jury@cherokeega.com",
      "phoneNumber": "678-493-6565",
      "department": "Jury Department"
    },
    {
      "image": "https://static.wixstatic.com/media/f5b098_e86ded2a6bc847f1893132743196cdff~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Rebecca%20Russett.jpg",
      "name": "",
      "title": "",
      "email": "rlrussett@cherokeega.com",
      "phoneNumber": "678-493-6582",
      "department": "Board of Equalization Information"
    },
];

  
const renderPeopleViews = () => {
    return peopleData.map((person, index) => (
        <View key={index}  >
            <ContactCard
                header={person.department}
                image={person.image}
                body={person.name}
                footer="Card Footer"
            />
        </View>
    ));
};



const WorkoutScreen = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor: '#1a0933'}} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <AccordionButton title="Upper">
            <View style={styles.additionalContent}>
              {/* Additional content */}
              <Text style={styles.additionalText}>
                This is additional content that appears when expanded.
              </Text>
            </View>
          </AccordionButton>
          <AccordionButton title="Core">
            <View style={styles.additionalContent}>
              {/* Additional content */}
              <Text style={styles.additionalText}>
                This is additional content that appears when expanded.
              </Text>
            </View>
          </AccordionButton>
          <AccordionButton title="Lower">
            <View style={styles.additionalContent}>
              {/* Additional content */}
              <Text style={styles.additionalText}>
                This is additional content that appears when expanded.
              </Text>
            </View>
          </AccordionButton>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      padding:16,
      flexDirection:'column',
      justifyContent:'space-evenly',
    },
    containerCOC:{
      alignItems:'center',
      justifyContent:'center',
      marginBottom:15,
      display:'none',
    },
    peopleRow:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-evenly',
    },
    personContainer:{
      margin:15,
      backgroundColor:'#F5F5F5',
      alignItems:'center',
      minHeight:250,
      minWidth:300,
      borderRadius:10,
    },
    personImage:{
      width:100,
      height:100,
      borderRadius:50,
      marginBottom:15,
      borderWidth:1,
      borderColor:'#862530',

    },
    personName:{
        display:'none',
    }, 
    personTitle:{
        display:'none',
    }, 
    personFooter:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#862530',
      justifyContent:'space-evenly',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },
    personHeader:{
        flex:1,
        width:'100%',
        backgroundColor:'#862530',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:10,
        alignItems:'center',
        paddingTop:5,
    },
    btnAction:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    scrollContainer: {
      paddingTop:35,
    },
    image: {
      
    },
    personPhone:{
      marginBottom:10,
    },
  });
  

export default WorkoutScreen;
