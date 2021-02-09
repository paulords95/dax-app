import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default AccountStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <Text style={{ color: "white", fontSize: 35 }}>Balanço</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9147FF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    position: "absolute",
    top: 0,
  },
  contentWrap: {},
});
