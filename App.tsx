import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    Vibration.vibrate(100);
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.welcomeText}>Count: {count}</Text>
        <TouchableOpacity onPress={onPress} style={styles.customButton}>
          <Text style={styles.customButtonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  customButton: {
    backgroundColor: "#000",
    borderRadius: 10,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  customButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
