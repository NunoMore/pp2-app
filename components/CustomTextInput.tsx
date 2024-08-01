import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { ThemedText } from "./ThemedText";

export default function CustomTextInput({
  errorText,
  description,
  ...props
}: any) {
  return (
    <View style={styles.container}>
      <Input underlineColor="transparent" mode="outlined" {...props} />
      {description && !errorText ? (
        <ThemedText style={styles.description}>{description}</ThemedText>
      ) : null}
      {errorText ? (
        <ThemedText style={styles.error}>{errorText}</ThemedText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  description: {
    fontSize: 13,
    // color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    // color: theme.colors.error,
    paddingTop: 8,
  },
});
