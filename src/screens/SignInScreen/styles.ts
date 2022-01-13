import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const AuthContainer = styled.View`
  width: ${RFPercentage(50)}px;
  margin: ${RFValue(32)}px auto 0;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(16)}px;
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(32)}px;
  text-align: center;
  color: #707070;
`;

export const Form = styled.View`
  background-color: #fff;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid #ddd;
`;

export const ChangePasswordButtonContainer = styled.View`
  padding: ${RFValue(24)}px ${RFValue(16)}px;
  align-items: flex-end;
`;

export const ChangePasswordButton = styled.TouchableOpacity``;

export const ChangePasswordText = styled.Text`
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: #c1c1c1;
`;
