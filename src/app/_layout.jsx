import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";

import React, { useCallback } from "react";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

import LogoTitle from "~components/logo";

SplashScreen.preventAutoHideAsync();

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

  return (
    <Stack
      onLayout={onLayoutRootView}
      screenOptions={{
        animation: "fade_from_bottom",
        headerStyle: { backgroundColor: "#090909" },
        headerTintColor: "#fff",
        headerTitle: (props) => <LogoTitle {...props} />,
      }}
    />
  );
}
