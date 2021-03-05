import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/imgs/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/imgs/logo-red.png")}
        />
        <Text style={styles.headingText}>Sell What You Don't Need</Text>
      </View>
      <AppButton title="login" buttonStyles={styles.loginButton} />
      <AppButton title="register" buttonStyles={styles.registerButton} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    width: "90%",
    height: 70,
    backgroundColor: "#fc5c65",
    marginBottom: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "90%",
    height: 70,
    backgroundColor: "#4ecdc4",
    marginBottom: 40,
  },
  logo: {
    height: 100,
    width: 100,
  },
  headingText: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
