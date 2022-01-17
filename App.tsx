import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Routes } from "./src/routes";
import { TokenProvider } from "./src/shared/context/Token";
import { store } from "./src/store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <TokenProvider>
          <Routes />
        </TokenProvider>
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
