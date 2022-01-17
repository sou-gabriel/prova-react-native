import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

export const Content = styled.View`
  padding: 0 ${RFValue(12)}px;
  flex: 1;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: #707070;
  font-style: italic;
  font-size: ${RFValue(24)}px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const ChooseGameContainer = styled.View`
  margin-top: ${RFValue(8)}px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: ${RFValue(16)}px;
  color: #868686;
`;

export const ButtonsContainer = styled.View`
  margin: ${RFValue(16)}px 0;
`;

export const Description = styled.Text`
  margin-bottom: ${RFValue(24)}px;
  font-size: ${RFValue(14)}px;
  font-style: italic;
  color: #868686;
`;

export const GameNumberButtonsContainer = styled.FlatList.attrs({
  contentContainerStyle: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: RFValue(16),
    justifyContent: "space-between",
  },
})``;

export const GameNumberButton = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-right: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  background-color: #adc0c4;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
`;

export const GameNumberButtonText = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(22)}px;
  color: #fff;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PrimaryActionButton = styled.TouchableOpacity`
  width: ${RFPercentage(18.5)}px;
  border-width: 2px;
  border-style: solid;
  border-color: #27c383;
  background-color: #fff;
  padding: ${RFValue(8)}px 0;
  align-items: center;
  border-radius: 10px;
`;

export const PrimaryActionButtonText = styled.Text`
  color: #27c383;
`;

export const SecondaryActionButton = styled(PrimaryActionButton)`
  flex-direction: row;
  background-color: #27c383;
  align-items: center;
  justify-content: center;
`;

export const SecondaryActionButtonText = styled(PrimaryActionButtonText)`
  color: #fff;
`;

export const Icon = styled(Ionicons)`
  margin-right: ${RFValue(8)}px;
  font-size: ${RFValue(16)}px;
  color: #fff;
`;
