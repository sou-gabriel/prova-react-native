import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ITheme {
  theme: string;
}

interface IContainerProps extends ITheme {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  flex-grow: 1;
  align-items: center;
  margin: ${RFValue(4)}px 0;
  padding: ${RFValue(8)}px 0;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme};
  border-radius: 999px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme : "transparent"};
`;

export const Text = styled.Text<ITheme>`
  font-weight: bold;
  font-style: italic;
  color: ${({ isActive, theme }) => (isActive ? "#fff" : theme)};
`;
