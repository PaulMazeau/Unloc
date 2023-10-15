import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import StudioCard from '../reusable/StudioCard';

export default function CardSearch() {
    return (
        <View>
            <StudioCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
