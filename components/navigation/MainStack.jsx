import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../../screens/Home';
import MapScreen from '../../screens/Map';
import SearchStackComponent from './SearchStack';

export default function MainStackComponent() {
    const MainNavigation = createNativeStackNavigator();
    
    return (
        <MainNavigation.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <MainNavigation.Screen name="HomeScreen" component={HomeScreen} />
            <MainNavigation.Screen name="Search" component={SearchStackComponent} />
            <MainNavigation.Screen name="Map" component={MapScreen} />
        </MainNavigation.Navigator>
    )
}