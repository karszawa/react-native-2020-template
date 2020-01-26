import { NavigationNativeContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../store/selector";
import { AuthNavigator } from "./AuthNavigator";
import { MainTabNavigator } from "./MainTabNavigator";

export const RootNavigator = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationNativeContainer>
      {isLoggedIn ? <MainTabNavigator /> : <AuthNavigator />}
    </NavigationNativeContainer>
  );
};
