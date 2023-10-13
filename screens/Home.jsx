import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AddDateBS from '../components/Home/SearchFormBS';
import Header from '../components/reusable/Header';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header/>
      <Text>Salut à tous c unloc</Text>
      <Button title='Aller sur la page stud' onPress={() => {navigation.navigate('Details')}}/>
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
