import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ThemedText } from "./ThemedText";

export default function HeaderText(props: any) {
  return <ThemedText style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 12,
  },
});
