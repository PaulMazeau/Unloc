import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SearchFormService({ submitForm, previousStep }) {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>T'as besoin de quoi ?</Text>
            
            <Button title="Précédent" onPress={previousStep} />
            <Button title="Suivant" onPress={submitForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#001D81',
    },
    searchBar: {
        flexDirection: 'row',
        marginTop: 20,
        height: 48,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 16
    },
    NearMe: {
        flexDirection: 'row',
        marginVertical: 14,
    },
    NearMeText: {
        marginLeft: 8,
        color: 'blue'
    },
    Button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 8,
        alignSelf: 'center'
    },
    ButtonText: {
        fontSize: 20,
        color: '#001D81',
        fontWeight: '600'
      }
});