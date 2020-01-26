import { WingBlank } from "@ant-design/react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Text } from "../styles/Text";
import { Screen } from "./Screen";

const Stack = createStackNavigator();

export const TableNavigator = () => (
  <Stack.Navigator initialRouteName={Screen.Table}>
    <Stack.Screen
      name={Screen.Table}
      component={() => (
        <WingBlank>
          <Text variant="h1">中身はないよ</Text>
        </WingBlank>
      )}
      options={{ title: "未定" }}
    />
  </Stack.Navigator>
);
