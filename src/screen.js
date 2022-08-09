import * as React from "react";
import {Text, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        hello world
      </Text>
    </SafeAreaView>
  );
};

export const CameraScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Camera
      </Text>
    </SafeAreaView>
  );
}

export const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Settings
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    
  },
});
