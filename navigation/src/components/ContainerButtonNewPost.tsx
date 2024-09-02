
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonAdd, { ButtonCancel } from './ButtonsNewPost';


export default function ButtonContainer() {
  return (
    <View style={styles.container}>
      <ButtonAdd />
      <ButtonCancel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 90, 
  },
});

