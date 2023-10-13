import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SearchFormCalendar from './SearchFormCalendar';

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
      <View style={{ flex: 1 }}>
        {step === 1 && (
          <View>
            <Text>Étape 1</Text>
            {/* Votre formulaire pour l'étape 1 ici */}
            <Button title="Suivant" onPress={nextStep} />
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
  
  export default SearchForm