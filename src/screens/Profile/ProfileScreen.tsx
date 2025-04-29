import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { posts } from "../../data/posts";
import GlobalHeader from "../../components/Headers/GlobalHeader";
import ProfileHeader from "../../components/Headers/ProfileHeader";

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const renderPostItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.gridImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ProfileHeader headerTitle={"Kaif_shaikh"} />
      {/* Profile Info */}
      <View style={styles.topSection}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/5.jpg",
          }}
          style={styles.profileImage}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>54</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2.1k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>134</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.userName}>kaif_shaikh</Text>
        <Text style={styles.bioText}>
          🚀 React Native Dev | 💻 Qoneqt App | 📍 India
        </Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          // style={[styles.tabButton, activeTab === "Posts" && styles.activeTab]}
          style={styles.tabButton}
          onPress={() => setActiveTab("Posts")}
        >
          <Text style={styles.tabText}>Posts</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.tabButton, activeTab === "Tagged" && styles.activeTab]}
          onPress={() => setActiveTab("Tagged")}
        >
          <Text style={styles.tabText}>Tagged</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView>
        {/* Posts Grid */}
        <FlatList
          data={posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 13,
    color: "#777",
  },
  bioContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  bioText: {
    marginTop: 2,
    fontSize: 13,
    color: "#333",
  },
  editButton: {
    margin: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingVertical: 6,
    alignItems: "center",
  },
  editText: {
    fontWeight: "500",
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  gridItem: {
    width: screenWidth / numColumns,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: "#f0f0f0",
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileScreen;
