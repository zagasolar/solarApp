import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"



const signInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
  
                <Animatable.Image 
                    animation="bounceInDown"
                source={require('../assets/Front_Icon.png')}
                style={styles.logo}
                resizeMode="stretch"  
                />
            </View>
            <Animatable.View style={styles.footer}
              animation="fadeInUpBig"    
             >
                <Text style={styles.title}>Today's Resource for a Brighter Tomorrow!</Text>
                <Text style={styles.register}>Click to Register!</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>alert("Nothing")}>
                  <LinearGradient
                    colors={['#667db6', '#0082c8', '#0082c8', '#667db6']}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Get started</Text>
                    <MaterialIcons
                      name="navigate-next"
                      color="#000"
                      size={20}
                    />
                  </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
  };
  export default signInScreen;

  const {height} = Dimensions.get("screen");
const height_logo = height * 0.34;

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      backgroundColor: 'skyblue'
  },

  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },

  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 50
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    color: '#000',
    fontWeight: 'bold'
  },

  register: {
    fontSize: 15,
    color: 'grey',
    marginTop:20,
    textAlign:"center"
  },

  logo: {
    width: height_logo,
    height: height_logo
  },

  button: {
    marginTop: 30,
    alignItems:"center"
  },

  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row'
  },
  textSign: {
    color: '#000',
    fontWeight: 'bold'
  }
})