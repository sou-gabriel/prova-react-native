import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(36)}px;
  color: #868686;
`;

export const Message = styled.Text`
  font-weight: bold;
  color: #707070;
  font-style: italic;
  font-size: ${RFValue(16)}px;
`;
