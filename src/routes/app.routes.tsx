import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { HomeScreen } from "../screens/HomeScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { CartScreen } from "../screens/CartScreen";
import { RootState } from "../store";

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Home: "home",
  Dashboard: "dashboard",
  Account: "account-circle",
  Cart: "shopping-cart",
};

export const AppRoutes = () => {
  const bets = useSelector((state: RootState) => state.cart.bets);

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? "#fff" : "#000";

          return (
            <MaterialIcons
              name={icons[route.name]}
              size={24}
              color={iconColor}
            />
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
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Dashboard" component={DashboardScreen} />
      <Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: bets.length,
          tabBarBadgeStyle: {
            backgroundColor: "#b5c401",
            color: "#fff",
          },
        }}
      />
      <Screen name="Account" component={AccountScreen} />
    </Navigator>
  );
};
