import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(16)}px;
`

export const Text = styled.Text`
  font-weight: bold;
  font-style: italic;
  font-size: ${RFValue(36)}px;
  color: #707070;
  text-align: center;
`

export const InnerContainer = styled.View`
  background-color: #b5c401;
  width: ${RFPercentage(25)}px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`

export const InnerText = styled.Text`
  font-size: ${RFValue(36)}px;
  font-weight: bold;
  font-style: italic;
  color: #fff;
`