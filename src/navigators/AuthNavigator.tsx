import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AuthScreen } from "../screens/AuthScreen/AuthScreen";
import { Screen } from "./Screen";

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={Screen.Auth}>
    <Stack.Screen name={Screen.Auth} component={AuthScreen} options={{ header: () => null }} />
    {/* <Stack.Screen name={Screen.SignIn} component={SignInScreen} /> */}
  </Stack.Navigator>
);
