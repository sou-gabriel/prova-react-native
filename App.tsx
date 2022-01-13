import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native"

import { SignInScreen } from "./src/screens/SignInScreen";

export default function App() {
  return (
    <View >
      <SignInScreen />
      <StatusBar style="auto" />
    </View>
  );
}
