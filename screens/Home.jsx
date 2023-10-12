import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddDateBS from '../components/Home/SearchFormBS';
import Header from '../components/reusable/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Salut à tous c unloc</Text>
      <AddDateBS/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
