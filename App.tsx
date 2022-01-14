import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
