import React from "react";

import {
    createAppContainer,

    createBottomTabNavigator,

    createStackNavigator

}from "react-navigation";

const Log_Reg_Stack = createStackNavigator ({
    Log : signInScreen
})

export default createAppContainer(Log_Reg_Stack);