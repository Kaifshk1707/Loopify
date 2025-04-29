import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    // add Firebase/Auth logic

    // If success, navigate to HomeScreen
    navigation.navigate("MainAppBottomTab");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>I don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.signInText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9fafd",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#051d5f",
    alignSelf: "center",
    marginBottom: 32,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#2e64e5",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  bottomText: {
    color: "#666",
    fontSize: 14,
  },
  signInText: {
    color: "#2e64e5",
    fontSize: 14,
    fontWeight: "600",
  },
});
