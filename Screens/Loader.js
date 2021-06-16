import * as React from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import {Animated,Dimensions} from "react-native";


const screenHeight = Dimensions.get("window").height;

class Loader extends React.Component {
            state = {
                scaleY: new Animated.Value(0),
                opacity: new Animated.Value(0),
                
            };

    // componentDidMount(){}
    componentDidMount() {
        console.log('acive' , this.props.isActive);
        if(this.props.isActive)
        { 
            console.log('acive1' , this.props.isActive);
            Animated.timing(this.state.scaleY, { toValue: 1, duration:0 , useNativeDriver: true}).start();
            console.log('acive2' , this.props.isActive);

            Animated.timing(this.state.opacity,{ toValue: 1,  useNativeDriver: true}).start();
            console.log('acive3' , this.props.isActive);

            this.animation.play();
            console.log('acive5' , this.props.isActive);

        }
        else{
            console.log('acive6' , this.props.isActive);
            Animated.timing(this.state.scaleY,{toValue:0,duration:0 , useNativeDriver: true}).start();
            console.log('acive7' , this.props.isActive);
            Animated.timing(this.state.opacity,{ toValue: 0 , useNativeDriver: true}).start();
            console.log('acive8' , this.props.isActive);
        }
        console.log('complete' , this.props.isActive)
    }
    //     if(this.props.isActive)
    //     { 
    //         Animated.timing(this.state.top, { toValue: 0, duration:0, useNativeDriver:true}).start();
    //         Animated.timing(this.state.opacity, { toValue: 1, useNativeDriver:true}).start();
    //         this.animation.play();
    //     }
    //     else{
    //         Animated.timing(this.state.top,{toValue:screenHeight,duration:0, useNativeDriver:true}).start();
    //         Animated.timing(this.state.opacity,{ toValue: 0, useNativeDriver:true}).start();
    //     }
    // }
    
    render(){
        return (
            <AnimatedContainer style={{scaleY : this.state.scaleY,opacity:this.state.opacity}} >
                <LottieView  source={require("../assets/43174-sunny-cloud.json")}
                autoPlay
                loop
                ref = {animation => {
                    this.animation=animation
                }}
                />
            </AnimatedContainer>
        );
    }
}
export default Loader;

const Container = styled.View`
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        justifyContent:center;
        alignItems:center;
        background:rgba(255,255,255,0.9);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

// import * as React from "react";
// import styled from "styled-components";
// import LottieView from "lottie-react-native";
// import {ActivityIndicator, Animated,Dimensions, View} from "react-native";


// class Loader extends React.Component {
    
//     render() {
//         if(this.props.isActive){
//             return(
//                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//                     <LottieView  source={require("../assets/43174-sunny-cloud.json")}
//                     autoPlay
//                     loop
//                     ref = {animation => {
//                         this.animation=animation
//                     }}
//                     />
//                 </View>
//             )
//         }
//     }
// }