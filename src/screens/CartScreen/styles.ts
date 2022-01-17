import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFPercentage(50)}px;
  height: ${RFValue(400)}px;
  align-self: center;
  background-color: #fff;
  border-width: 2px;
  border-style: solid;
  border-color: #e2e2e2;
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.View`
  padding: ${RFValue(24)}px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: #707070;
  font-style: italic;
  font-size: ${RFValue(24)}px;
`;

export const BetsContainer = styled.View`
  margin: ${RFValue(8)}px 0;
  justify-content: center;
  flex: 1;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: ${RFValue(96)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
`;

export const SubmitButtonText = styled.Text`
  margin-right: ${RFValue(8)}px;
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(36)}px;
  color: #b5c401;
`;

export const SubmitButtonIcon = styled(AntDesign)`
  font-size: ${RFValue(36)}px;
  color: #b5c401;
`;
