import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "transparent", // Set background color of header
          },
        }}
      />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
