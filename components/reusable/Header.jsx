import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profil from "../../assets/icons/Profil.svg";
import Settings from "../../assets/icons/Settings.svg"

const Header = ({ onProfilePress, onSettingsPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <TouchableOpacity onPress={onProfilePress}>
        <Profil width={30} height={30} color={'#001D81'}/>
      </TouchableOpacity>

      {/* Logo in the center */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Settings Icon on the right */}
      <TouchableOpacity onPress={onSettingsPress}>
        <Settings width={26} height={26} color={'#001D81'}/>
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
  },
  logo: {
    width: 100,
    height: 40,
  }
});

export default Header;
