import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Routes } from "./src/routes";
import store from "./src/store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
