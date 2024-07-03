import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface CustomButtonProps {
  mode?:
    | "text"
    | "outlined"
    | "contained"
    | "elevated"
    | "contained-tonal"
    | undefined;
  label: string;
  style?: any;
  onPress: () => void;
}

export default function CustomButton({
  label,
  mode,
  style,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      style={[
        styles.button,
        mode === "outlined",
        // && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
