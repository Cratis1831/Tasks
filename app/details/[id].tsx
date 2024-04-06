import { Text, StyleSheet, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Details" }} />

      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={[StyleSheet.absoluteFill]}
      />

      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: "white" }}>Details: {id}</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Details;
