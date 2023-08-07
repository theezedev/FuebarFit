import {React, useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useNavigation } from '@react-navigation/native';
import { MD5, SHA256 } from 'crypto-js';
import CreateAccountScreen from './CreateAccount';
// import AppNav from './appNav';

const gloStyle = require('../style'); //Global Styles

export default function LoginScreen(){
    const navigation = useNavigation();

    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordInputRef = useRef(null);


    useEffect(() => {
        // Perform the onLoad event logic here
        checkLoginStatus();
    }, []);
    
    const checkLoginStatus = async () => {
        try {
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
            if (isAuthenticated === 'true') {
                navigation.navigate(); //AppNav
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
            <Text style={[gloStyle.txtWhite,{marginBottom:5,}]}>Fuebar Fit</Text>
            <Image source={require('../assets/favicon.png')} style={styles.imgIcon} />
            <Text style={gloStyle.txtH1}>Login</Text>
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
            {/* <CheckRememberMe/> */}
            <View style={styles.containerCheck}>
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Switch value={rememberMe} onValueChange={rememberMe => setRememberMe(rememberMe)} style={styles.switchBasic}/>
                    <Text style={{color:'#fff',}}>Remember Me</Text>   
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'#fff'}}> Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <View style={{  }}>
                        <Text style={{ color: '#e939b8' }}> Sign up.</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
                 
            </View>
            <TouchableOpacity style={[styles.loginBtn, gloStyle.btnPrimary]} onPress={validateLogin}>
                <Text style={gloStyle.txtWhite}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerCheck:{
        width:'80%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    switchBasic:{
        marginRight:10,
    },
    imgIcon:{
        height:150,
        width:150,
    },
    txtLogin:{
      
    },
    imageIcon:{
        resizeMode: 'contain'
    },
    inputView:{
      width:"80%",
      backgroundColor:"#fff",
      borderRadius:5,
      height:50,
      marginBottom:10,
      justifyContent:"center",
      padding:20,
    },
    inputText:{
      height:50,
    },
    loginBtn:{
      width:"80%",
      marginTop:20,
      marginBottom:10
    },
    loginText:{
    //   color:"white"
    }
});