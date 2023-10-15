import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import StudioScreen from '../../screens/Studio';
import SearchScreen from '../../screens/Search';

export default function SearchStackComponent() {
    const SearchStack = createNativeStackNavigator();
    
    return (
        <SearchStack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="SearchResult" component={SearchScreen} />
            <SearchStack.Screen 
                name="Studio" 
                component={StudioScreen}
                sharedElementsConfig={(route, otherRoute, showing) => {
                return ["item.id"];
                }}
            />
        </SearchStack.Navigator>
    )
}