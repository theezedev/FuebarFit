import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const SideMenu = ({ navigation, state }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={[styles.containerSideNav]}>
        <Image style={styles.sideNavImg} source={require('../assets/icon.png')}/>
        <TouchableOpacity
          style={[styles.sideNavBtn, state.index === 0 && styles.activeButton]}
          onPress={navigateToScreen('Home')}
        >
            <Text style={[styles.sideNavBtnText, state.index === 0 && styles.activeButtonText]}>Dailies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sideNavBtn, state.index === 1 && styles.activeButton]}
          onPress={navigateToScreen('Workouts')}
        >
            <Text style={[styles.sideNavBtnText, state.index === 1 && styles.activeButtonText]}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={true} style={[styles.sideNavBtn]} onPress={navigateToScreen('Home')}>
            <Text style={[styles.sideNavBtnText,{color:'grey'}]}>Online</Text>
            <Text style={{fontSize:10,color:'grey'}}>(Coming Soon)</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerSideNav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#6c40bb',
    borderRightWidth:1,
    borderRightColor:'#ea39b8',
  },
  sideNavBtn:{
      marginTop:10,
      marginBottom:10,
      alignItems:'center',
  },
  sideNavBtnText: {
    fontSize: 18,
    marginBottom: 0,
    color:'#fff',
  },
  sideNavImg:{
      height:100,
      width:100,
      borderColor:'#85220f',
      marginBottom:25,
  },
  activeButton: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)', // Set your desired active background color
    // color:'#ea39b8',
  },
  activeButtonText: {
    fontWeight: 'bold',
    color:'#ea39b8',
  }

});

export default SideMenu;
