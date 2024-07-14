/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const backgroundTransparentColor = "rgba(149, 0, 77, 0.50)";

export const Colors = {
  lightTheme: {
    dark: false,
    colors: {
      primary: "rgb(0, 122, 255)",
      card: "rgb(255, 255, 255)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
      text: "#11181C",
      background: backgroundTransparentColor,
      tint: tintColorLight,
      icon: "#687076",
      tabIconDefault: "#687076",
      tabIconSelected: tintColorLight,
    },
  },
  darkTheme: {
    dark: true,
    colors: {
      primary: "rgb(10, 132, 255)",
      card: "rgb(18, 18, 18)",
      border: "rgb(39, 39, 41)",
      notification: "rgb(255, 69, 58)",
      text: "#ECEDEE",
      background: backgroundTransparentColor,
      tint: tintColorDark,
      icon: "#9BA1A6",
      tabIconDefault: "#9BA1A6",
      tabIconSelected: tintColorDark,
    },
  },
};
