import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { Result, Users } from "../types";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  Image,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Result[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setRefreshing(false); // Stop the refreshing indicator
    }
  };

  const onRefresh = () => {
    setRefreshing(true); // Start the refreshing indicator
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={users}
            contentContainerStyle={styles.flatListContent}
            keyExtractor={(item) => item.login.uuid}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.thumbnail }}
                  style={styles.thumbnail}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.emailText}>{item.email}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  flatListContent: {
    gap: 10,
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontWeight: "bold",
  },
  emailText: {
    color: "gray",
  },
});
