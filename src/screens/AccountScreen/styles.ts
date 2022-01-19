import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;
  justify-content: center;
`;

export const Heading = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 8px;
  border-radius: 999px;
`;

export const AccountInfo = styled.View``;

export const Username = styled.Text`
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

export const Email = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const CreationDate = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const LogoutButton = styled.Button``;
