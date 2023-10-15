import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SearchFormCalendar from './SearchFormCalendar';
import SearchFormPlace from './SearchFormPlace';
import { useNavigation } from '@react-navigation/native';
import SearchFormService from './SearchFormService';

const SearchForm = () => {
    const [step, setStep] = useState(1);
    const navigation = useNavigation();

    const nextStep = () => {
      // Validation des données de l'étape actuelle si nécessaire
      setStep((prevStep) => prevStep + 1);
    };
  
    const previousStep = () => {
      setStep((prevStep) => prevStep - 1);
    };

    const submitForm = () => {
      navigation.navigate('Search');
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
            <SearchFormService submitForm={submitForm} previousStep={previousStep} />
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