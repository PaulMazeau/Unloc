import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function OpenBottomSheetButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.addButton}>
            <Text style={styles.ButtonText}>Chercher un studio</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  addButton: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1FFFB',
    width: '100%',
    borderRadius: 8,
    position: 'absolute', 
    bottom: 40,
    alignSelf: 'center'
  },
  ButtonText: {
    fontSize: 20,
    color: '#001D81',
    fontWeight: '600'
  }
});

export default OpenBottomSheetButton;
