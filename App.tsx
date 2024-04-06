import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link } from "expo-router";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    Vibration.vibrate(100);
    setCount((prevCount) => prevCount + 1);
  };
  const detail_id: number = 1;
  return (
    <>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#8711c1", "#2472fc"]}
          style={[StyleSheet.absoluteFill]}
        />
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome!</Text>

          <TextInput
            placeholder="username"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
          />
          <TextInput
            placeholder="password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry
          />
          <Link href={`/details/${detail_id}`} asChild>
            <TouchableOpacity onPress={onPress} style={styles.customButton}>
              <Text style={styles.customButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
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
  linearGradient: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 4,
    padding: 10,
    width: "80%",
    backgroundColor: "white",
  },
});
