import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 84px;
  justify-content: center;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #ebebeb;
  padding-left: ${RFValue(16)}px;
`;

export const Field = styled.TextInput`
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  font-style: italic;
  color: #9d9d9d;
  height: 100%;
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  font-style: italic;
  color: red;
  position: absolute;
  bottom: ${RFValue(12)}px;
  left: ${RFValue(16)}px;
`;
