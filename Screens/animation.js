import React from 'react'
import { StyleSheet, View,ActivityIndicator,Button } from 'react-native'

export default function animation() {
    const [isLoading, setIsLoading] = React.useState(false);
    console.log(isLoading)
    const animate = () => {
        console.log(isLoading)
        if(!isLoading){
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000);
        }
    }
    return (
        <View style={[styles.icon, styles.horizontal]}>
            <Button title='log' onPress={animate}></Button>
            <ActivityIndicator animating={isLoading} size='large' color="#FDB813"/>
        </View> 
    )}


const styles = StyleSheet.create({
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
        opacity:1
    },
})
