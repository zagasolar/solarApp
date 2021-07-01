import React from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert, ActivityIndicator} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import Axios from 'axios'
export default function LoginScreen() {
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
        Axios.post('http://localhost:3030/get',{
            username : userName,
            password : passWord
        }).then(function(response){
            if(response.data == 'correct password'){
                alert('valid user from backend')
            }
            else{
                setPasswordError('Invalid username or password')
                setTimeout(() => {
                    setPasswordError('')
                }, 3000);
            }
        })
    }
    


    return (
        <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>ZAGA LOGIN</Text>
                    </View>
                    <View style={styles.Inputbox1}>
                        <TextInput style={styles.Input1} placeholder="Username" keyboardType="email-address" 
                        value={userName}
                        onChangeText={(text) => setUserName(text)}/>
                    </View>
                    <View><Text>{usernameError}</Text></View>
                    <View style={styles.Inputbox2}>
                        <TextInput style={styles.Input2} placeholder="Password" secureTextEntry={true}
                        value={passWord}
                        onChangeText={text=>setPassWord(text)}/>
                    </View>
                    <View><Text>{passwordError}</Text></View>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={handlelogin}>
                      <LinearGradient style={styles.gradient1} colors={['#56ab2f', '#56ab2f', '#a8e069']}>
                          <Text style={styles.login}>LOGIN</Text>
                      </LinearGradient>
                  </TouchableOpacity>
                    </View>
                   
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },  
    text: {
        paddingTop:70,
        fontWeight:'600',
        textAlign:'center',
        fontSize:40,
        color:'#000',
    },
    gradient1:{
        marginTop:40,
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40
    },
    login: {
        fontSize:20,
        fontWeight:'700',
        color:'white'
    },
    button : {
        alignItems:'center'
    },
    //Input styles
    Inputbox1 : {
        marginTop:50,
        marginBottom:20,
        width:230,
        height:30,
        marginLeft:80,
        borderBottomWidth:1
        
    },
    Inputbox2 : {
        marginTop:30,
        marginBottom:20,
        width:230,
        height:30,
        marginLeft:80,
        borderBottomWidth:1
    },
    Input1 : {
        paddingLeft:10
    },
    Input2 : {
        paddingLeft:10
    },
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
        opacity:1
    }
    

})

