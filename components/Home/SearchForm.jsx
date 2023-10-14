import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchFormCalendar from './SearchFormCalendar';
import SearchFormPlace from './SearchFormPlace';

const SearchForm = () => {
    const [step, setStep] = useState(1);
  
    const nextStep = () => {
      // Validation des données de l'étape actuelle si nécessaire
      setStep((prevStep) => prevStep + 1);
    };
  
    const previousStep = () => {
      setStep((prevStep) => prevStep - 1);
    };
  
    return (
      <View style={styles.container}>
        {step === 1 && (
          <View>
            <SearchFormPlace nextStep={nextStep} previousStep={previousStep} />
          </View>
        )}
  
        {step === 2 && (
          <View>
            <SearchFormCalendar nextStep={nextStep} previousStep={previousStep} />
          </View>
        )}
  
        {step === 3 && (
          <View>
            <Text>Étape 3</Text>
            {/* Votre formulaire pour l'étape 3 ici */}
            <Button title="Précédent" onPress={previousStep} />
            <Button title="Terminer" onPress={() => console.log('Formulaire terminé!')} />
          </View>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#E3FDF1', 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
  });
  
  export default SearchForm