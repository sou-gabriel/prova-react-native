import React from "react";
import { View, Text, Button } from "react-native";

import { Header } from "@components";

export const AccountScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Header />
      <View>
        <View>
          <Text>Logo</Text>
          <View>
            <Text>Gabriel Ramos</Text>
          </View>
        </View>

        <Button
          title="Logout"
          onPress={() => {
            console.log("Realizar logout do usuário");
          }}
        />
      </View>
    </View>
  );
};
