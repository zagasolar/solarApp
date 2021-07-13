import React from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import Axios from 'axios'
import MainScreen from "./MainScreen";


const appId = "1047121222092614";

export default function LoginScreen({navigation}) {
    const [userName , setUserName] = React.useState('')
    const [passWord , setPassWord] = React.useState('')
    const [usernameError , setUsernameError] = React.useState('')
    const [passwordError , setPasswordError] = React.useState('')
    const handlelogin = () => {
        if ( userName.length==0 && passWord.length==0 ) {
            setUsernameError('Invalid User')
            setPasswordError('Invalid password')
            setTimeout(() => {
                setUsernameError('')
                setPasswordError('')
            }, 3000);
        } else {
            usernameValidation()
        }   
    }

    const usernameValidation = () => {
        if(userName.length ==0 )
        {
            setUsernameError('User Name Invalid')
            setTimeout(() => {
                setUsernameError('')
            }, 3000);
        }
        else
        { 
            passwordValidation()
        }
    }
    const passwordValidation = () => {
        if(passWord.length ==0 )
        {
            setPasswordError('Invalid Password')
            setTimeout(() => {
                setPasswordError('')
            }, 3000);
        }
        else
        {
            userPasswordValidation()
        } 
    }

    const userPasswordValidation = () => {
        Axios.post('http://10.0.2.2:3030/get',{
            username : userName,
            password : passWord
        }).then(function(response){
            if(response.data == 'correct password'){
                // console.log("I am WorKing")
                navigation.navigate(MainScreen)
            }
            else{
                setPasswordError('Invalid username or password')
                setTimeout(() => {
                    setPasswordError('')
                }, 3000);
            }
        })
    }
    
    // async function onFbLoginPress() {
    //     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
    //       permissions: ['public_profile', 'email'],
    //     })
    //     if (type === 'success') {
    //       const response = await fetch(
    //         `https://graph.facebook.com/me?access_token=${token}`);
    //       Alert.alert(
    //         'Logged in!',
    //         `Hi ${(await response.json()).name}!`,
    //       )
    //     }
    //   }
      

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
                <Text style={styles.logoText}>ZAGA Solar App</Text>
                {/* username */} 
                <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} keyboardType="email-address" 
                    value={userName} onChangeText={(text) => setUserName(text)} />
                    <View><Text>{usernameError}</Text></View>
                {/* password */}
                <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}
                    value={passWord}
                    onChangeText={text=>setPassWord(text)} />
                    <View><Text>{passwordError}</Text></View>
                <Button
                    buttonStyle={styles.loginButton}
                    onPress={handlelogin}
                    title="Login"
                />
           
            <Button
              buttonStyle={styles.fbLoginButton}
              
              title="Login with Facebook"
              color="#3897f1"
            />
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
     )
    }

