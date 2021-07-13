import React , { useState,useEffect }  from 'react';
import { Animated,View,Text,Image,ImageBackground, TouchableOpacity ,StyleSheet,SafeAreaView } from 'react-native';
import {
  useAnimate,
  useAnimateSequence,
} from '@rootstrap/react-native-use-animate';
import axios from 'axios';


const styles = StyleSheet.create({
  box: {
    width: 18,
    height: 18,
    backgroundColor: 'green',
    borderRadius : 100,
    //borderBottomEndRadius:100

  },
  line: {
    width: 5,
    height: 100,
    backgroundColor: 'blue',
    
  },
  box1: {
    width: 18,
    height: 18,
    backgroundColor: 'blue',
    borderRadius : 100
  },
  box2: {
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius : 100
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
 
export default function MainScreen() {

  //Panel production fetch

  const [solarData, setSolarData] = useState([]);

  useEffect(() => {
    async function fetchSolarData() {
      const request_solar = await axios.get('http://10.0.2.2:3000/solarproduction');
      
      console.log(request_solar.data);
      setSolarData(request_solar.data + " W")
    }
    fetchSolarData();
  }, []);

  //For Appliance Fetch

  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    async function fetchLoadData() {
      const request_appliance = await axios.get('http://10.0.2.2:3000/appliance');
      console.log(request_appliance.data);
      setLoadData(request_appliance.data + " W")
    }
    fetchLoadData();
  }, []);


//For battery fetch
 const [battery, setBattery] = useState([]);

 useEffect(() => {
   async function fetchBatteryData() {
     const request_battery = await axios.get('http://10.0.2.2:3000/battery');
     console.log(request_battery.data);
     setBattery(request_battery.data + "%");
   }
   fetchBatteryData();
 }, []);



  const [solarDirection, setSolarDirection] = useState(true);

  const animatedX = useAnimate({
    fromValue: 170,
    toValue: 330,
    animate: false,
  });
 
  const animatedY = useAnimate({
    fromValue: 0,
    toValue: 200,
    bounce: false,
    animate: false,
  });
  const animatedZ = useAnimate({
    fromValue: 170,
    toValue: 3,
    animate: false,
  });
  const animatedW = useAnimate({
    fromValue: 170,
    toValue: 3,
    animate: false,
  });
 
  useAnimateSequence({
    animations: [ animatedY,animatedX,animatedZ],
    iterations: -1,
    duration: 1000,
  });
  const panelAnimation1 = <Animated.View
  style={[
    styles.box,
    {
      left: animatedX.animatedValue,
      top: animatedY.animatedValue,
      right: animatedZ.animatedValue,
      
    },
  ]}
  
/> ;


const panelAnimation2 = <Animated.View
style={[
  styles.box1,
  {
    //left: animatedX.animatedValue,
    top: animatedY.animatedValue,
    left: animatedZ.animatedValue,
    
  },
]}

/> ;
const panelAnimation3 = <Animated.View
style={[
  styles.box2,
  {
    //left: animatedX.animatedValue,
    //top: animatedY.animatedValue,
    left: animatedW.animatedValue,
    
  },
]}

/> ;
const line1 = <Animated.View
style={[
  styles.line,
  {
    left: 170,
    top: 250
    //left: animatedZ.animatedValue,
    
  },
]}
/> ;

  

  return (

    
    <SafeAreaView style={{flex: 1}}>

      {/*<ImageBackground source={require('../assets/solar-panel.jpg')} style={styles.image}>*/}

        <Image
          style={{ width: 100, height: 100 ,marginLeft: 130,marginTop:20}}
              source={require('../assets/new_png.png')}/>
              
          <Text className="text" style={{ marginLeft: 160, fontSize: 15 , fontWeight: 'bold' , color : 'green' , marginTop:10 }} >{solarData}</Text>

             
         {solarDirection === true ? panelAnimation1 : panelAnimation2 }
     
      <View style={{  flex:1 , flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => {
              setSolarDirection(false) , console.log('setting ' , solarDirection);
          }}>
         <Image
          style={{ width: 100, height: 100, marginLeft: 5 , marginTop:140 }}

         source={require('../assets/new_png.png')} 
         />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
          setSolarDirection(true) , console.log('setting ' , solarDirection);
        }}>
          
         
    <Image
          style={{ width: 100, height: 100, marginLeft: 175 , marginTop:140 }}

        source={require('../assets/new_png.png')}
      />
           

      </TouchableOpacity>
      
    </View>
    <View style={{  flex:1 , flexDirection: 'row',}}>
       <Text style={{ marginLeft: 35, fontSize: 15 , fontWeight: 'bold' , color : 'green' , marginTop:10 }} >{loadData}</Text>
       <Text style={{ marginLeft: 220, fontSize: 15  , fontWeight: 'bold' , color : 'green' , marginTop:10 }} >{battery}</Text>

       </View>
     {/* </ImageBackground>*/}

</SafeAreaView>
  );
};

