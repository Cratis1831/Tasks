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
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider value={DefaultTheme}>
        <Stack
          screenOptions={{
            headerTransparent: false,
            headerShadowVisible: false,
          }}
        />
        <StatusBar style="light" />
      </ThemeProvider>
    </SafeAreaView>
  );
}
