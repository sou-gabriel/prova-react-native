import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface IContainerProps {
  isSelected: boolean;
  color: string;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})<IContainerProps>`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-right: ${RFPercentage(2.7)}px;
  margin-bottom: ${RFPercentage(1)}px;
  background-color: ${(props) => {
    return props.isSelected ? props.color : "#adc0c4";
  }};
  align-items: center;
  justify-content: center;
  border-radius: 999px;
`;

export const Number = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(22)}px;
  color: #fff;
`;
