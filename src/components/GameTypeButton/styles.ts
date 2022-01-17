import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ITheme {
  theme: string;
}

export const Container = styled.TouchableOpacity<ITheme>`
  flex-grow: 1;
  align-items: center;
  margin: ${RFValue(4)}px 0;
  padding: ${RFValue(8)}px 0;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme};
  border-radius: 999px;
`;

export const Text = styled.Text<ITheme>`
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme};
`;
