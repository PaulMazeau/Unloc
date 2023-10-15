import React, { useCallback } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Search from '../../assets/icons/Search.svg';
import LocationIcon from '../../assets/icons/Location.svg';

export default function SearchFormPlace({ nextStep }) {

    const fetchLocation = useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log('Latitude:', location.coords.latitude, 'Longitude:', location.coords.longitude);
    }, []);

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
            <TouchableOpacity style={styles.NearMe} onPress={fetchLocation}>
                <LocationIcon height={20} width={20} color={'blue'}/>
                <Text style={styles.NearMeText}>Cherchez autour de moi</Text>
            </TouchableOpacity>

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
        backgroundColor: '#01DBBD',
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
