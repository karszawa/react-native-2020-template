import { WingBlank } from "@ant-design/react-native";
import React from "react";

interface Props {
  margin?: "sm" | "md" | "lg";
}

export const Container: React.FC<Props> = ({ children, margin }) => {
  return <WingBlank size={margin}>{children}</WingBlank>;
};
