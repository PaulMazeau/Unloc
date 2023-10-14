import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Search from '../../assets/icons/Search.svg'
export default function SearchFormPlace({ nextStep, previousStep }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ou souhaites-tu rec ?</Text>
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.input}
                    placeholder="Indique la ville ou l'arrondissement"
                />
                <Search height={20} width={20} color={'#001D81'}/>
            </View>

            <TouchableOpacity onPress={nextStep} style={styles.Button}>
                <Text style={styles.ButtonText}>Suivant</Text>
            </TouchableOpacity>
        </View>
    );
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
