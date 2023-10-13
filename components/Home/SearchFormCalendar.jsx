import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function SearchFormCalendar({ nextStep, previousStep }) {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View>
            <Text>SearchFormCalendar</Text>
            
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'blue'
                    }
                }}
            />
            
            {selectedDate && <Text>Date sélectionnée : {selectedDate}</Text>}

            <Button title="Précédent" onPress={previousStep} />
            <Button title="Suivant" onPress={nextStep} />
        </View>
    )
}
