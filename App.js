import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import MainStackComponent from './components/navigation/MainStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">  
        <Stack.Screen name="MainStack" component={MainStackComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;