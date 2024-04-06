import { View, Image, Text, StyleSheet } from "react-native";
import { User } from "../types";

export default function UserListItem({ user }: { user: User }) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: user.picture.thumbnail }}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
