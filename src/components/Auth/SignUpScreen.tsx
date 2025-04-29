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

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Yaha aap Firebase ya API se sign up kara sakte ho

    Alert.alert("Success", "Account created successfully");
    navigation.navigate("MainAppBottomTab"); // Ya "SignInScreen" agar chaaho
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#999"
      />

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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.signInText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
