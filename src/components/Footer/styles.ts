import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin-top: ${RFValue(16)}px;
  padding: ${RFValue(24)}px 0;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #ebebeb;
`;

export const CopyrightParagraph = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #707070;
  text-align: center;
`;
