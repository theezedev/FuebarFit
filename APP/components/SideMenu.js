import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const SideMenu = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={[styles.containerSideNav]}>
        <Image style={styles.sideNavImg} source={{uri: 'https://static.wixstatic.com/media/f5b098_147dd9786b02406fa7c9e025db817912~mv2.jpg/v1/fill/w_268,h_268,al_c,lg_1,q_80,enc_auto/Untitled.jpg',}}/>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('Home')}>
            <Text style={styles.sideNavBtnText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('Contact')}>
            <Text style={styles.sideNavBtnText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled='true' style={[styles.sideNavBtn]} onPress={navigateToScreen('Home')}>
            <Text style={[styles.sideNavBtnText,{color:'grey'}]}>Jury Duty</Text>
            <Text style={{fontSize:10,color:'grey'}}>(Coming Soon)</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled='true' style={styles.sideNavBtn} onPress={navigateToScreen('Home')}>
            <Text style={[styles.sideNavBtnText,{color:'grey'}]}>Case Search</Text>
            <Text style={{fontSize:10,color:'grey'}}>(Coming Soon)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('Forms')}>
            <Text style={styles.sideNavBtnText}>Forms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('Calendar')}>
            <Text style={styles.sideNavBtnText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideNavBtn} onPress={navigateToScreen('Fee')}>
            <Text style={styles.sideNavBtnText}>Fee Schedule</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
    containerSideNav: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sideNavBtn:{
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
    },
    sideNavBtnText: {
      fontSize: 18,
      marginBottom: 0,
    },
    sideNavImg:{
        height:100,
        width:100,
        borderRadius:100,
        borderWidth:2,
        borderColor:'#85220f',
    }

});

export default SideMenu;
