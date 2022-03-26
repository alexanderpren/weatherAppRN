
import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from "./src/global/colors";

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>Try editing me! 🎉</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColor,
  },
});

export default App;
