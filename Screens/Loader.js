import * as React from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import {Animated,Dimensions} from "react-native";


const screenHeight = Dimensions.get("window").height;

class Loader extends React.Component {
            state = {
                top: new Animated.Value(0),
                opacity: new Animated.Value(0),
                
            };
    
    // componentDidMount(){}
    componentDidMount(prevProps,prevState) {
        if(this.props.isActive)
        { 
            Animated.timing(this.state.top,{ toValue: 0, duration:0}).start();
            Animated.timing(this.state.opacity,{ toValue: 1}).start();
            this.animation.play();
        }
        else{
            Animated.timing(this.state.top,{toValue:screenHeight,duration:0}).start();
            Animated.timing(this.state.opacity,{ toValue: 0}).start();
        }
    }

    render(){
        return (
            <AnimatedContainer style={{top: this.state.top,opacity:this.state.opacity}} >
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