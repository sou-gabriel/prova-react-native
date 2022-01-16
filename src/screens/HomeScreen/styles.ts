import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface IButton {
  color: string;
  disabled?: boolean;
}

export const Header = styled.View`
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

export const Content = styled.View`
  padding: ${RFValue(12)}px;
  flex: 1;
`;

export const ContentHeader = styled.View`
  margin-bottom: ${RFValue(16)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: #707070;
  font-style: italic;
  font-size: ${RFValue(24)}px;
`;

export const FiltersContainer = styled.View`
  /* background-color: green; */
`;

export const GameFiltersButtonsContainer = styled.View`
  flex-direction: column;
`;

export const GameFilterButton = styled.TouchableOpacity<IButton>`
  flex-grow: 1;
  align-items: center;
  margin: ${RFValue(4)}px 0;
  padding: ${RFValue(8)}px 0;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => color};
  border-radius: 999px;
`;

export const GameFilterButtonText = styled.Text<IButton>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-style: italic;
`;

export const SavedBetsContainer = styled.View`
  margin-top: ${RFValue(24)}px;
  flex: 1;
  justify-content: center;
`;
