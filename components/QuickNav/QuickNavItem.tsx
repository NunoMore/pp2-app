import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

export interface QuickNavItemProps {
  title: string;
  onPress: () => void;
}

const QuickNavItem: React.FC<QuickNavItemProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <ThemedText style={styles.buttonText}>{title}</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    // Border styles
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 100, // Round button corners

    // Shadow (iOS only)
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    color: "white", // Change this to your desired text color
  },
});

export default QuickNavItem;
