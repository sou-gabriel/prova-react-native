import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

// import { SignUpScreen } from "./src/screens/SignInScreen";
import { SignUpScreen } from "./src/screens/SignUpScreen";

export default function App() {
  return (
    <View>
      <SignUpScreen />
      <StatusBar style="auto" />
    </View>
  );
}
