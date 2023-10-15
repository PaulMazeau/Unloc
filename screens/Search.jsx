import React, {useState} from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Header from '../components/reusable/Header';
import { LinearGradient } from 'expo-linear-gradient'; 
import CardSearch from '../components/Search/CardSearch';
import MapSearch from '../components/Search/MapSearch';
import Card from '../assets/icons/Card.svg'
import Map from '../assets/icons/Map.svg'

export default function SearchScreen() {
  const [viewMode, setViewMode] = useState('card');

  return (
    <LinearGradient
    colors={['#ECFFFC', '#01DBBD']}
    locations={[0.5, 1]} 
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{ flex: 1 }}
  >
     <View style={styles.container}>
        <Header/>
        {viewMode === 'card' ? <CardSearch /> : <MapSearch />}
        <View style={styles.toggleButtonContainer}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.fakeBlur}
          >
            <TouchableOpacity 
              style={[styles.toggleButton, viewMode === 'card' && styles.selected]}
              onPress={() => setViewMode('card')}
            >
              <Card height={20} width={20} color={'#001D81'}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, viewMode === 'map' && styles.selected]}
              onPress={() => setViewMode('map')}
            >
              <Map height={20} width={20} color={'#001D81'}/>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({ 
   container: {
      flex: 1,
      paddingHorizontal: 14,
   },
   toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  },
  
  toggleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  selected: {
    borderColor: '#01DBBD',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFF'
  },
  fakeBlur: {
    flexDirection: 'row',
    borderRadius: 25,
    padding: 10,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
