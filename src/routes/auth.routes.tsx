import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import { ChangePasswordScreen } from "../screens/ChangePasswordScreen";

export const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
