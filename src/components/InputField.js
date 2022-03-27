import React, { memo } from 'react';
import { useField } from 'formik';
import { TextInput, StyleSheet, Text } from 'react-native';
import { AlertScreen } from './AlertScreen';
import {COLORS} from "../global/colors";

export const InputField = memo(({ fieldName, placeholder, ...props }) => {
  const [field, meta] = useField(fieldName);
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        value={field.value}
        placeholder={placeholder ? placeholder : null}
        {...props}
      />
      {meta.error && meta.touched && (
        <Text style={styles.error}>{meta.error}</Text>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    width: '80%',
    justifyContent: 'center',    
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lineColor,
    textAlign: 'center'
  },
  error: {
    color: 'red',
    marginLeft: 10,
    marginRight: 10,
  },
});
