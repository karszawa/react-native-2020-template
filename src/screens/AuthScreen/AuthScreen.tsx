import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Screen } from "../../navigators/Screen";
import { signIn } from "../../store/operations/signIn";
import { Color } from "../../styles/colors";

const denoDanceAnimation = require("../../assets/animations/dino-dance.json");

export const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const result = dispatch(signIn(undefined));

    if (!result) {
      navigation.navigate(Screen.SignIn);
    } else {
      // automatically switches the screen to Home
    }
  }, []);

  return (
    <Container>
      <LottieView
        autoPlay
        cacheStrategy="strong"
        loop
        source={denoDanceAnimation}
        style={{ width: 120 }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Color.Black};
  justify-content: center;
  align-items: center;
`;
