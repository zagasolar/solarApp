import * as React from "react";
import {
    View,
    StyleSheet
}from "react-native";
import LottieView from "lottie-react-native";

class Loader extends React.Component {
    componentDidMount(){
        this.animation.play();
    }

    render(){
        return (
            <View style={styles.container} >
                <LottieView  source={require("../assets/43174-sunny-cloud.json")}
                autoPlay={false}
                loop
                ref = {animation => {
                    this.animation=animation;
                }}
                />
            </View>
        );
    }
}
export default Loader;

const styles = StyleSheet.create({
    container : {
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
        left:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.9)'
    }
})