import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Routes } from "./src/routes";
import { TokenProvider } from "./src/shared/context/Token";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TokenProvider>
        <Routes />
      </TokenProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
