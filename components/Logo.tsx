import { Screens } from "@/constants/Screens";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Logo() {
  const handleLogoPress = () => {
    router.navigate(Screens.Home);
  };

  return (
    <TouchableOpacity onPress={handleLogoPress}>
      <Image source={require("@/assets/images/pp2.png")} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    maxHeight: 178,
    maxWidth: 290,
    resizeMode: "contain",
  },
});
