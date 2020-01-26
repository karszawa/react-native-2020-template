import React from "react";
import { StyleSheet, Text as NativeText } from "react-native";

interface Props {
  variant?: "h1" | "h2" | "h3" | "body" | "note";
}

export const Text: React.FC<Props> = ({ children, variant }) => {
  return <NativeText style={styles[variant || "body"]}>{children}</NativeText>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
  },
  note: {
    fontSize: 12,
    lineHeight: 16,
  },
});
