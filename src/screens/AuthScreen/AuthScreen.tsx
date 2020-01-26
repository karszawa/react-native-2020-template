import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

import { Color } from "../../styles/colors";

const denoDanceAnimation = require("../../assets/animations/dino-dance.json");

export const AuthScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: Color.Black,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        autoPlay
        cacheStrategy="strong"
        loop
        source={denoDanceAnimation}
        style={{ width: 120 }}
      />
    </View>
  );
};
