import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";

const ProfileHeader = ({
  headerTitle,
  onPressCreate,
  onPressCheck,
  onPressChat,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
      }}
    >
      {/* Left - Logo or Title */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {headerTitle}
      </Text>

      {/* Right - Action Icons */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onPressChat} style={{ marginHorizontal: 8 }}>
          {/* <Ionicons name="chatbubble-outline" size={22} color="black" /> */}
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
