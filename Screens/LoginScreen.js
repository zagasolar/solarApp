import * as React  from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { Component } from "react";
import Loader from "./Loader";


export default class LoginScreen extends Component{
    state = {
        username:"",
        password:""
    }
    
    handlelogin = () => {
        console.log("email:",this.state.username);
        console.log("password:",this.state.password);
    }
    
    render() {
            return(
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>ZAGA LOGIN</Text>
                    </View>
                    <View style={styles.Inputbox1}>
                        <TextInput style={styles.Input1} placeholder="Username" keyboardType="email-address" 
                        onChangeText={(username) => {this.setState({username:username})}}/>
                    </View>
                    <View style={styles.Inputbox2}>
                        <TextInput style={styles.Input2} placeholder="Password" enablesReturnKeyAutomatically={true} secureTextEntry={true}
                        onChangeText={(password) => {this.setState({password:password})}}/>
                    </View>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={this.handlelogin}>
                      <LinearGradient style={styles.gradient1} colors={['#56ab2f', '#56ab2f', '#a8e069']}>
                          <Text style={styles.login}>LOGIN</Text>
                      </LinearGradient>
                  </TouchableOpacity>
                    </View>
                   <Loader isActive={true}/>
                </View>
            );
        };
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
    }
    

})