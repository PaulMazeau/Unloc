import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Studio')}
        activeOpacity={0.7}
      >
          <Animated.Image 
            source={require('../assets/images/studio.jpg')} 
            style={styles.image}
            resizeMode="cover"
            sharedTransitionTag="tag"
          />
        <Text style={styles.studioName}>Nom du Studio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#F5F5F5',
   },
   card: {
       width: 250,
       height: 350,
       borderRadius: 20,
       overflow: 'hidden',
       backgroundColor: '#FFFFFF',
       elevation: 10,
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
   },
   image: {
       width: '100%',
       height: '80%',
       zIndex: 3,
   },
   studioName: {
       fontSize: 20,
       fontWeight: 'bold',
       textAlign: 'center',
       padding: 10,
       color: '#333',
   }
});
