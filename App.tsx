import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { Routes } from "./src/routes";
import { TokenProvider } from "./src/shared/context/Token";
import { store } from "./src/store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <TokenProvider>
          <Routes />
          <Toast />
        </TokenProvider>
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
