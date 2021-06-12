import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Screens/Splashscreen";
// import signInScreen from "./Screens/signInScreen";
import LoginScreen from "./Screens/LoginScreen";
import "react-native-screens";




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ZAGA" component={SplashScreen} />
        {/* <Stack.Screen name="signIn" component={signInScreen} />*/}
        <Stack.Screen name="Register" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;