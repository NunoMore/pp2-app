import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import LanguagePicker from "./LanguagePicker";

const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.rightView}>
        <ProfileButton />
        <LanguagePicker />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "rgba(41, 8, 39, 1)",
    flex: 1,
    bottom:0,
    maxHeight: 100,
    flexDirection: "row",
    gap: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoView: {
    flex: 1,
    maxHeight: "80%",
  },
  rightView: {
    flexDirection: "row",
  },
});

export default Header;
