import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  margin-top: ${RFValue(16)}px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: ${RFValue(96)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  margin: 0 ${RFValue(8)}px;
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(36)}px;
  color: #707070;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(36)}px;
  color: #707070;
`;
