import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";

import { useCallback } from "react";

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

import LogoTitle from "~components/logo";

SplashScreen.preventAutoHideAsync();

export const headerOptions = {
  title: "iP4y | Instituição de Pagamento",
  animation: "slide_from_bottom",
  headerStyle: { backgroundColor: "#090909" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitle: (props) => <LogoTitle {...props} />,
};

export default function Layout() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} screenOptions={headerOptions} />;
}
