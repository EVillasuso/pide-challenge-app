import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import StoreProducts from './app/screens/store/StoreProducts';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StoreProducts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
