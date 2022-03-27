import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {COLORS} from '../global/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.backgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lineColor,
    padding: 20,
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    color: COLORS.textColor,
  },
});

export default ({weatherName, temp, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.secondContainer}>
      <Text style={styles.text}>
        {weatherName ? weatherName : 'Loading...'}
      </Text>
      <Text style={styles.text}>Temp : {temp ? temp : 'Loading...'} °F</Text>
    </View>
  </TouchableOpacity>
);
