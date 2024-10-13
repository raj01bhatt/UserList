import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { users } from "./mockUsers";

const UserProfileList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const newUsers = users.slice((page - 1) * 3, page * 3);
      setData([...data, ...newUsers]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.profileItem}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.profileDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>Age: {item.age}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={fetchUsers} // Trigger when scrolled to end
      onEndReachedThreshold={0.5} // Load more when scrolled 50% from the bottom
      ListFooterComponent={renderFooter} // Show spinner at the bottom when loading more
    />
  );
};

const styles = StyleSheet.create({
  profileItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileDetails: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "#666",
  },
  loader: {
    padding: 20,
    alignItems: "center",
  },
});

export default UserProfileList;
