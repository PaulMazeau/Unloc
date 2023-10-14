import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AddDateBS from '../components/Home/SearchFormBS';
import Header from '../components/reusable/Header';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; 

const HomeScreen = () => {

  const navigation = useNavigation();

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
        <View style={styles.titleSection}>
            <Text style={styles.title}>Réservez</Text>
            <Text style={styles.title}>un studio</Text>
            <Text style={styles.title}>rapidement</Text>
        </View>
      <Button title='Aller sur la page stud' onPress={() => {navigation.navigate('Details')}}/>
      <Button title='Aller sur la page map' onPress={() => {navigation.navigate('Map')}}/>
      <AddDateBS/>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 24
  },
  title: {
    fontSize: 52,
    fontWeight: '700',
    color: '#001D81',
    lineHeight: 50,
  }
});

export default HomeScreen;
