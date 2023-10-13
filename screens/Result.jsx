import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function ResultScreen() {
  // référence pour le bottom sheet
  const bottomSheetRef = useRef(null);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/studio.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={['45%', '90%']}
        handleComponent={null}
      >
        <View style={styles.BlocText}>
          <Text style={styles.StudioTitle}>Studio Bobillot</Text>
          <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  image: {
    height: '60%',
    width: 'auto',
    backgroundColor: 'green',
  },
  BlocText: {
    backgroundColor: 'red',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 14,
  },
  StudioTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 14
  }
});
