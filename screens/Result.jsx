import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';


export default function ResultScreen() {
  // référence pour le bottom sheet
  const bottomSheetRef = useRef(null);
  const [sheetPosition, setSheetPosition] = useState(0);
  const navigation = useNavigation();

  const handleSheetChanges = (index) => {
    setSheetPosition(index);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
            <Image 
                source={require('../assets/icon.png')}
                style={styles.backIcon} 
                resizeMode="contain" 
            />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/studio.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['45%', '89%']}
        handleComponent={null}
        onChange={handleSheetChanges}
        style={{ zIndex: 10 }}
      >
        <BottomSheetScrollView scrollEnabled={sheetPosition === 1} style={styles.BottomSheet}>
            <Text style={styles.StudioTitle}>Studio Bobillot</Text>
            <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: '60%',
    width: 'auto',
  },
  BottomSheet: {
    backgroundColor: 'red',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 14,
    flex: 1
  },
  StudioTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 14
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 14,
    zIndex: 5, 
},

backIcon: {
    width: 35, 
    height: 35
}

});
