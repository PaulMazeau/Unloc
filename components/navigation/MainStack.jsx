import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../../screens/Home';
import ResultScreen from '../../screens/Result';
import MapScreen from '../../screens/Map';

export default function MainStackComponent() {
    const MainNavigation = createNativeStackNavigator();
    
    return (
        <MainNavigation.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <MainNavigation.Screen name="HomeScreen" component={HomeScreen} />
            <MainNavigation.Screen name="Details" component={ResultScreen} />
            <MainNavigation.Screen name="Map" component={MapScreen} />
        </MainNavigation.Navigator>
    )
}