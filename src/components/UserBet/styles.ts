import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface IColor {
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(16)}px;
`;

export const VerticalLine = styled.View<IColor>`
  width: ${RFValue(6)}px;
  height: 100%;
  background-color: ${({ color }) => color};
  margin-right: ${RFValue(12)}px;
  border-radius: 999px;
`;

export const Content = styled.View``;

export const ChosenNumbers = styled.Text`
  margin-bottom: 2px;
  font-weight: bold;
  font-style: italic;
  font-size: ${RFValue(16)}px;
  color: #868686;
`;

export const PurchaseInfo = styled.Text`
  margin-bottom: 2px;
  color: #868686;
`;

export const Type = styled.Text<IColor>`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  font-style: italic;
  color: ${({ color }) => color};
`;
