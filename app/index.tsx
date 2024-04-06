import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import { User } from "../types";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  FlatList,
  View,
  RefreshControl,
  StyleSheet,
} from "react-native";
import UserListItem from "../components/UserListItem";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
    } catch (error) {
      alert("An error occurred while fetching users");
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
    <>
      <Stack.Screen
        options={{
          title: "",

          headerTintColor: "black",
          headerStyle: {
            // backgroundColor: "transparent",
          },
          headerLeft: () => (
            <Link href="/profile">
              <Ionicons name="person-outline" size={24} color="black" />
            </Link>
          ),
          headerRight: () => (
            <Link href="/settings">
              <Ionicons name="settings-outline" size={24} color="black" />
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
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
              renderItem={({ item }) => <UserListItem user={item} />}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
  },
  flatListContent: {
    gap: 10,
    padding: 20,
  },
});
