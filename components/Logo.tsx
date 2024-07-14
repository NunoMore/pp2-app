import { Screens } from "@/constants/Screens";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Logo() {
  const handleLogoPress = () => {
    router.navigate(Screens.Home);
  };

  return (
    <TouchableOpacity onPress={handleLogoPress} style={styles.container}>
      <Image source={require("@/assets/images/pp2.png")} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "20%",
    maxHeight: "100%",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: "100%",
    resizeMode: "contain",
  },
});
