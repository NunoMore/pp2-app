import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

export interface QuickNavItemProps {
  title: string;
  onPress: () => void;
}

const QuickNavItem: React.FC<QuickNavItemProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "grey", // Semi-transparent white background
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100, // Round button corners
    shadowColor: "silver", // Shadow color (black)
    shadowOffset: { width: 2, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 2, // Shadow blur radius
  },
  buttonText: {
    fontSize: 16,
    color: "white", // Change this to your desired text color
  },
});

export default QuickNavItem;
