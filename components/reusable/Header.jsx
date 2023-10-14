import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ onProfilePress, onSettingsPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <TouchableOpacity onPress={onProfilePress}>
        <MaterialIcons name="account-circle" size={28} color="black" />
      </TouchableOpacity>

      {/* Logo in the center */}
      <Image
        source={require('../../assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Settings Icon on the right */}
      <TouchableOpacity onPress={onSettingsPress}>
        <MaterialIcons name="settings" size={28} color="black" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: {
        paddingBottom: Platform.OS === 'android' ? 25 : -25
    },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
  }
});

export default Header;
