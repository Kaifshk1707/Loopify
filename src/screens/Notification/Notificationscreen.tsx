import React from "react";
import {
  View,
  Text,
  SectionList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { notifications } from "../../data/notifyData";

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.userImage }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.bold}>{item.userName}</Text> {item.text}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      {item.thumbnail && (
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      )}
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#f7f7f7",
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: "#444",
  },
  card: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 15,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  thumbnail: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft: 8,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 12,
  },
});

export default NotificationScreen;
