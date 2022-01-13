import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SignInScreen } from "../screens/SignInScreen";

export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
