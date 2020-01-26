import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <Tab.Navigator initialRouteName="Feed">
    <Tab.Screen
      name="Feed"
      component={() => <View />}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }: { color: string }) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={() => <View />}
      options={{
        tabBarLabel: "Updates",
        tabBarIcon: ({ color }: { color: string }) => (
          <MaterialCommunityIcons name="bell" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={() => <View />}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }: { color: string }) => (
          <MaterialCommunityIcons name="account" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);
