import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";
import { Stack as StackName } from "./Screen";

const Stack = createStackNavigator();

export const RootNavigator = () => (
  <NavigationNativeContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={StackName.Auth}
        component={AuthNavigator}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={StackName.Main}
        component={MainNavigator}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  </NavigationNativeContainer>
);
