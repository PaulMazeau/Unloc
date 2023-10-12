import React, { useState, useCallback, useRef, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SearchForm from './SearchForm';

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
      <TouchableOpacity onPress={openBottomSheet} style={styles.addButton}>
        <Text>Chercher un studio</Text>
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={['65%']}
        index={0}
        backdropComponent={renderBackdrop}
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
  addButton: {
    height: 40,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 8,
  },
  contentContainer: {
    backgroundColor: 'white',
    width: '96%',
    marginHorizontal: '2%',
    borderRadius: 35,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    marginTop: 15,
  },
  input: {
    height: 44,
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: 10,
    borderRadius: 14,
  },
  participant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop:10
  },
  participantContainer: {
    flexGrow: 1,
  },
  add: {
    backgroundColor: '#172ACE',
    height: 56,
    borderRadius: 13,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    marginLeft: 15,
  },
});

export default AddListeCourseBS;