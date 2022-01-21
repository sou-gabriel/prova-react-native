import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

export const VerticalLine = styled.View`
  width: 5px;
  height: 100%;
  border-radius: 13px;
  background-color: #b5c401;
`

export const AccountInfo = styled.View`
  padding-left: ${RFValue(8)}px;
`;

export const Username = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;

export const Email = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const CreationDate = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LogoutButton = styled.TouchableOpacity`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;
  justify-content: center;
  align-items: center;
  background-color: #b5c401;
  border-radius: 999px;
  box-shadow: 0px 0px 30px #000;
  margin-right: 8px;
`;

export const LogoutIcon = styled(MaterialIcons)`
  color: #fff;
  font-size: 24px;
`

export const EditButton = styled.TouchableOpacity`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 999px;
  box-shadow: 0px 0px 30px #000;
`;

export const EditIcon = styled(FontAwesome)`
  color: #b5c401;
  font-size: 26px;
`
