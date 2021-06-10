import * as React from "react";
// import * as Font from "expo-font";
// import { AppLoading } from 'expo';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

//SplashScreen
const Splashscreen = ({navigation}) => {
  return(
    <View style={styles.front}>
      <ImageBackground source={require('../assets/bg_image1.jpg')} style={styles.bgImg}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require("../assets/Front_Icon.png")}
        />
        <Text style={styles.title}>Welcome to our Solar Environment!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <LinearGradient style={styles.gradient} colors={['#56ab2f', '#56ab2f', '#a8e069']}>
                <Text style={styles.login}>Login</Text>
              </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
              <LinearGradient style={styles.gradient2} colors={['#56ab2f', '#56ab2f', '#a8e069']}>
                  <Text style={styles.register}>Register</Text>
              </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      </ImageBackground> 
   </View>
  );
};
export default Splashscreen;

const styles = StyleSheet.create({
  img:{
    width:250,
    height:250,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:65
  },
  title: {
    fontWeight:'bold',
    textAlign:'center',
    fontSize:30,
    color:'#F5F5F5',
  },
  button: {
    marginTop:50,
    alignItems:'center',
  },
  gradient: {
    width:250,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    // flexDirection:'column'
  },
  gradient2:{
    marginTop:25,
    width:250,
    height:60,
    alignItems:"center",
    justifyContent:'center',
    borderRadius:40,
    // flexDirection:'column'
  },
  login: {
    fontSize:20,
    fontWeight:'bold'
  },
  register: {
    fontSize:20,
    fontWeight:'bold'
  },
  front: {
    flex:1,
    flexDirection:'column'
  },
  bgImg: {
    flex:1,
    flexDirection:'column',
  }
})
