import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface IButton {
  color: string;
  disabled?: boolean;
}

export const Content = styled.View`
  padding: 0 ${RFValue(12)}px;
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

export const SavedBetsContainer = styled.View`
  margin-top: ${RFValue(24)}px;
  flex: 1;
  justify-content: center;
`;
