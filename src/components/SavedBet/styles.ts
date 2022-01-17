import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
interface ITheme {
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(24)}px;
`;

export const TrashButton = styled.TouchableOpacity`
  align-self: center;
  margin-right: ${RFValue(16)}px;
`;

export const TrashIcon = styled(FontAwesome5)`
  font-size: ${RFValue(24)}px;
  color: #868686;
`;

export const VerticalLine = styled.View<ITheme>`
  width: ${RFValue(6)}px;
  height: 80%;
  align-self: center;
  margin-right: ${RFValue(16)}px;
  border-radius: 999px;
  background-color: ${(props) => props.color};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(8)}px 0;
  justify-content: center;
`;

export const Numbers = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: ${RFValue(8)}px;
  font-weight: bold;
  font-style: italic;
  font-size: ${RFValue(16)}px;
  color: #868686;
`;

export const BetData = styled.Text`
  margin-bottom: ${RFValue(8)}px;
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: #868686;
`;

export const Date = styled.Text`
  font-weight: normal;
`;

export const GameName = styled.Text<ITheme>`
  font-weight: bold;
  font-style: italic;
  font-size: ${RFValue(16)}px;
  color: ${({ color }) => color};
`;
