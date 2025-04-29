import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { chatData } from "../../data/chatData";


const ChatListScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
      }}
    >
      <Image
        source={{ uri: item.profile }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: "#666" }}>{item.message}</Text>
      </View>
      <Text style={{ color: "#999", fontSize: 12 }}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 12,
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#ccc",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kaif</Text>
        <Ionicons name="create-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View
        style={{
          backgroundColor: "#f0f0f0",
          margin: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          placeholder="Search"
          style={{ padding: 10, flex: 1 }}
          placeholderTextColor="#666"
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChatListScreen;
