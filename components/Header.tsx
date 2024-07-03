import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import LanguagePicker from "./LanguagePicker";

const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <Logo />
      <View style={styles.container}>
        <ProfileButton  />
        <LanguagePicker />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
