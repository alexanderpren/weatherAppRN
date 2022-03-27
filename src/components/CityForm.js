import React from 'react';
import { useFormikContext } from 'formik';
import { InputField } from './InputField';
import { ButtonCustom } from './ButtonCustom';


export const CityForm = () => {
  const { submitForm } = useFormikContext();

  return (
    <>
      <InputField fieldName="city" placeholder="City Name" />
      <ButtonCustom title="Lookup" onSubmit={submitForm} />
    </>
  );
};
