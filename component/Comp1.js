import React from "react";
import {Text,StyleSheet} from "react-native";


export default class Comp1 extends React.Component{
  render(){
    return(
        <Text style = {styles.textstyle}>HariHaran</Text>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    color:"#FFF",
    backgroundColor: "black",
    borderRadius:10
  }
})