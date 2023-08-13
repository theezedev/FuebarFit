import {React, useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { MD5, SHA256 } from 'crypto-js';
// import AppNav from './appNav';

const gloStyle = require('../style'); //Global Styles

export default function CreateAccountScreen(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const passwordInputRef = useRef(null);


    useEffect(() => {
        // Perform the onLoad event logic here
        checkLoginStatus();
    }, []);
    
    const checkLoginStatus = async () => {
        try {
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            if (isAuthenticated === 'true') {
                navigation.navigate(AppNav);
            }
        } catch (error) {
            console.log('Error checking login status:', error);
        }
    };

    const validateLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert(
                'Alert',
                'Please enter both email and password.',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
        } else {
            loginUser();
        }
    };

    const loginUser = async () => {
        let hashString = email+password+'IESDevelopmentServices';
        const hashedMD5 = MD5(hashString).toString();
        console.log('MD5 hash:', hashedMD5);

        let loginVal = true;

        if(loginVal){
            setEmail(''); 
            setPassword(''); // ! TODO: Need to figure out how to reset fields on logout
            loginSuccess(hashedMD5);
        }else{
            // setPassword('');
            loginFailure();
        }

        
    };
    
    const loginSuccess = (hashedMD5) => {
        try {
            AsyncStorage.setItem('isAuthenticated', 'true')
                .then(() => console.log('User is authenticated.'))
                .catch((error) => console.log('Error storing authentication status:', error));
            if(rememberMe){
                AsyncStorage.setItem('hashValue', hashedMD5.toString())
                    .then(() => console.log('Hash stored.'))
                    .catch((error) => console.log('Error storing hash value:', error));
            }
            navigation.navigate(AppNav);

        } catch (error) {
            
            console.log('Error storing authentication status:', error);
        }
    };

    const loginFailure = () => {
        Alert.alert(
            'Alert',
            'Username or password is incorrect.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    };
    
    return (
        <View style={[styles.container, gloStyle.bgApp]}>
            <ScrollView style={[styles.containerScroll,]} contentContainerStyle={{flex:1,flexDirection:'column',}}>
                <View style={{flex:1,flexDirection:'column',alignItems:'center', justifyContent:'center',}}>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            id='inputEmail'
                            placeholder="Email..." 
                            placeholderTextColor="#003f5c"
                            ref={passwordInputRef} // Add the ref to the password input
                            value={email}
                            clearButtonMode="always"
                            onChangeText={(text) => setEmail(text)}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            id='inputUsername'
                            placeholder="Username..." 
                            placeholderTextColor="#003f5c"
                            ref={passwordInputRef} // Add the ref to the password input
                            value={email}
                            clearButtonMode="always"
                            onChangeText={(text) => setUsername(text)}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            secureTextEntry
                            id='inputPassword'
                            ref={passwordInputRef} // Add the ref to the password input
                            style={styles.inputText}
                            placeholder="Password..." 
                            placeholderTextColor="#003f5c"
                            value={password}
                            clearButtonMode="always"
                            onChangeText={(text) => setPassword(text)}/>
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            secureTextEntry
                            id='inputPassword'
                            ref={passwordInputRef} // Add the ref to the password input
                            style={styles.inputText}
                            placeholder="Re-type Password..." 
                            placeholderTextColor="#003f5c"
                            value={password}
                            clearButtonMode="always"
                            onChangeText={(text) => setRetypePassword(text)}/>
                    </View>
                    <TouchableOpacity style={[styles.loginBtn, gloStyle.btnPrimary]} onPress={validateLogin}>
                        <Text style={gloStyle.txtWhite}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    containerScroll:{
        flexDirection:'column',
        // backgroundColor:'yellow',
    },
    inputView:{
      backgroundColor:"#fff",
      borderRadius:5,
      height:50,
      marginBottom:10,
      justifyContent:"center",
      padding:10,
      width:"80%",
    },
    inputText:{
      height:50,
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#43464b",
      borderRadius:5,
      height:50,
      alignItems:"center",
      justifyContent:"center",
    //   marginTop:10,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
});