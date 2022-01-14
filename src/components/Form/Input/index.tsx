import React from "react";
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from "react-native";

import { Container, Field, ErrorMessage } from "./styles";

interface IInputProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export const Input = ({ control, name, error, ...rest }: IInputProps) => {
  return (
    <Container>
      <Controller
        name={name} 
        control={control}
        render={({ field: { onChange, value } }) => (
          <Field 
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}; 
