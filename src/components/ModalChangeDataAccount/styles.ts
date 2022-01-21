import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.Modal``

export const InnerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #868686A5;
  box-shadow: 0 15px 15px #868686A5;
`

export const Form = styled.View`
  width: 80%;
  height: ${RFValue(350)}px;
  padding: ${RFValue(24)}px;
  background-color: #FFF;
  border-radius: 13px;
`

export const InputGroup = styled.View`
  margin-bottom: ${RFValue(32)}px;
  padding-bottom: 4px;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #b5c401;
`

export const Label = styled.Text`
  font-weight: bold;
  color: #868686;
`

export const Input = styled.TextInput`
  color: #868686;
  font-style: italic;
`

export const ErrorMessage = styled.Text`
  color: red;
  font-style: italic;
`

export const PrimaryButton = styled.TouchableOpacity`
  padding: ${RFValue(8)}px 0;
  border-radius: 13px;
  align-items: center;
  background: #b5c401;
`

export const PrimaryButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
`

export const SecondaryButton = styled.TouchableOpacity`
  margin-top: ${RFValue(8)}px;
  padding: ${RFValue(8)}px 0;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: #b5c401;
  border-radius: 13px;
`

export const SecondaryButtonText = styled.Text`
  color: #b5c401;
`
