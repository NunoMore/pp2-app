import { ThemeProvider, useNavigationState } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";
import { PaperProvider } from "react-native-paper";
import { isMobile } from "@/utils/utils";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [isLoginRoute, setIsLoginRoute] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const screenOptions = () => {
    if (isMobile()) return { headerShown: false };
    else return { header: Header };
  };

  // const verifyLoginRoute = () => {
  //   setIsLoginRoute(
  //     navigation.getState().routes.includes((r) => r.name.includes("login"))
  //   );
  // };

  // useEffect(() => {
  //   verifyLoginRoute();
  // }, [navigation]);

  return (
    <PaperProvider>
      <ThemeProvider
        value={colorScheme === "dark" ? Colors.darkTheme : Colors.lightTheme}
      >
        <Stack screenOptions={screenOptions()}>
          <Stack.Screen name="index" />
          <Stack.Screen name="profile" />
          <Stack.Screen name="(login)" options={{ headerShown: false }} />
          <Stack.Screen name="(vouchers)" />
        </Stack>
        {isMobile() && <Header />}
      </ThemeProvider>
    </PaperProvider>
  );
}
