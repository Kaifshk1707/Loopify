import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { globalColor } from "../../styles/globalColors";

const dummyMessages = [
  { id: "1", text: "Hey!", fromMe: false },
  { id: "2", text: "Hi, how are you?", fromMe: true },
  { id: "3", text: "I'm good! You?", fromMe: false },
];

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { userName } = route.params;

  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now().toString(),
        text: newMessage,
        fromMe: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        alignSelf: item.fromMe ? "flex-end" : "flex-start",
        backgroundColor: item.fromMe ? "#DCF8C6" : "#f0f0f0",
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: "75%",
      }}
    >
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 15 }}>
          {userName}
        </Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
      />

      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: "#ddd",
            backgroundColor: "#fff",
          }}
        >
          <TextInput
            placeholder="Message..."
            value={newMessage}
            onChangeText={setNewMessage}
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "#f0f0f0",
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={24} color={globalColor.blueGray} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
