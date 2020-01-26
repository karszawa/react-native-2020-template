import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { OrderScreen } from "../screens/OrderScreen/OrderScreen";
import { Screen } from "./Screen";

const Stack = createStackNavigator();

export const OrderNavigator = () => (
  <Stack.Navigator initialRouteName={Screen.Order}>
    <Stack.Screen name={Screen.Order} component={OrderScreen} options={{ title: "Orders" }} />
    {/* <Stack.Screen name={Screen.SignIn} component={SignInScreen} /> */}
  </Stack.Navigator>
);
