import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(137)}px;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Logo = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(36)}px;
  font-style: italic;
  color: #707070;
`;

export const HorizontalLine = styled.View`
  width: ${RFValue(93)}px;
  height: ${RFValue(6)}px;
  border-radius: 999px;
  background: #b5c401;
`;
