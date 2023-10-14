import React, { useState, useCallback, useRef, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SearchForm from './SearchForm';
import OpenBottomSheetButton from '../reusable/OpenBottomSheetButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddListeCourseBS = () => {
  // State pour le titre de la liste
  const [title, setTitle] = useState(null);

  // Référence à la bottom sheet modal
  const bottomSheetRef = useRef(null);

  // Fonction pour ouvrir la bottom sheet modal
  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };
  
  const handleAddCourse = async () => {
    console.log('heheheheh');
    bottomSheetRef.current?.close();
  }


  // Rendu du backdrop de la bottom sheet modal
  const renderBackdrop = useCallback(
    (props) => {
      return (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={'close'}
        />
      );
    },
    []
  );
  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <OpenBottomSheetButton onPress={openBottomSheet} /> 
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={['65%']}
        index={0}
        backdropComponent={renderBackdrop}
        handleComponent={null}
      >
        <SearchForm/>
      </BottomSheetModal>
    </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddListeCourseBS;