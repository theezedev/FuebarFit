'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    bgPrimary:{
        backgroundColor:'#85220f',
    },
    bgSecondary:{
        backgroundColor:'#ccab2c',
    },
    backgroundImage:{
        flex: 1,
        justifyContent: 'center',
    },
    gloShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 15,
        style: { marginVertical: 5 }
    },

});
