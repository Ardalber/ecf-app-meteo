import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderToday from './components/HeaderToday';

export default function App() {
  var today = new Date();
  return (
    <View style={styles.container}>
      <HeaderToday></HeaderToday>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
