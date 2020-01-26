import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { OrderNavigator } from "./OrderNavigator";
import { Screen } from "./Screen";
import { TableNavigator } from "./TableNavigator";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => (
  <Tab.Navigator initialRouteName={Screen.Order}>
    <Tab.Screen
      name={Screen.Order}
      component={OrderNavigator}
      options={{
        tabBarLabel: "Orders",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="border-color" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name={Screen.Table}
      component={TableNavigator}
      options={{
        tabBarLabel: "Tables",
        tabBarIcon: ({ color, size }) => <MaterialIcons name="group" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);
