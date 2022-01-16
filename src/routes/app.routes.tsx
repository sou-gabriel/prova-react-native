import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeScreen } from "../screens/HomeScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { AccountScreen } from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const icons = {
  Home: "home",
  Dashboard: "dashboard",
  Account: "account-circle",
};

export const AppRoutes = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const iconColor = focused ? "#fff" : "#000";

        return (
          <MaterialIcons name={icons[route.name]} size={24} color={iconColor} />
        );
      },
      tabBarActiveTintColor: "#fff",
      tabBarActiveBackgroundColor: "#4895ef",
      tabBarLabelStyle: {
        fontSize: 12,
      },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
