// App.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import UserProfileList from "./component/UserProfileList";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <UserProfileList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F5F2",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
});
