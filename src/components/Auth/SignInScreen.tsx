import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Please enter both email and password");
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Success", "Logged in successfully");
        navigation.navigate("MainAppBottomTab");
      })
      .catch((err) => {
        Alert.alert("Login Error", err.message);
      });
  };

  const handleGoogleLogin = () => {
    Alert.alert("Info", "Google login pressed");
  };

  const handleFacebookLogin = () => {
    Alert.alert("Info", "Facebook login pressed");
  };

  const handleTwitterLogin = () => {
    Alert.alert("Info", "Twitter login pressed");
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: "#f9fafd",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#051d5f",
          alignSelf: "center",
          marginBottom: 32,
        }}
      >
        Welcome Back!
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#999"
        style={{
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 8,
          paddingHorizontal: 16,
          marginBottom: 20,
          fontSize: 16,
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
        style={{
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 8,
          paddingHorizontal: 16,
          marginBottom: 20,
          fontSize: 16,
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      />

      <TouchableOpacity
        onPress={handleSignIn}
        style={{
          backgroundColor: "#2e64e5",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          textAlign: "center",
          marginVertical: 20,
          fontSize: 14,
          color: "#999",
        }}
      >
        OR
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 20 }}>
        <TouchableOpacity
          onPress={handleGoogleLogin}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#DB4437",
          }}
        >
          <AntDesign name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleFacebookLogin}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#3b5998",
          }}
        >
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleTwitterLogin}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#1DA1F2",
          }}
        >
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <Text style={{ color: "#666", fontSize: 14 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text
            style={{
              color: "#2e64e5",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
