import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { posts } from "../../data/posts";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseLike,
  decreaseLike,
} from "../../store/homeReducers/homeReducer";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [likedPosts, setLikedPosts] = useState({});


  const increaseLikes = useSelector(
    (state) => state.increaseTotalLikes.totalLike
  );
  
  const filteredPosts = posts.filter((post) =>
    post.userName.toLowerCase().includes(searchText.toLowerCase())
  );


  const handleLike = (postId) => {
    const isLiked = likedPosts[postId];

    if (isLiked) {
      dispatch(decreaseLike());
    } else {
      dispatch(increaseLike());
    }

    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !isLiked,
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Top: Username */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Image
            source={{ uri: item.profileImage }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
        </View>
        <Text style={{ fontWeight: "bold" }}>{item.userName}</Text>
      </View>

      {/* Description */}
      <View style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
        <Text>{item.description}</Text>
      </View>

      {/* Image */}
      <Image
        source={{ uri: item.image }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
      />

      {/* Action Buttons */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 8,
          // gap: 5,
        }}
      >
        {/* Like */}
        <TouchableOpacity
          onPress={() => handleLike(item.id)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          {likedPosts[item.id] ? (
            <FontAwesome name="heart" size={24} color="red" />
          ) : (
            <FontAwesome name="heart-o" size={22} color="black" />
          )}

          <Text style={{ marginLeft: 5, color: "black", fontSize: 14 }}>
            {/* {item.likes} */}
            {increaseLikes}
          </Text>
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <FontAwesome name="comment-o" size={22} color="black" />
          <Text style={{ marginLeft: 5, color: "black", fontSize: 14 }}>
            {item.comments}
          </Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome name="share" size={22} color="black" />
          <Text style={{ marginLeft: 5, color: "black", fontSize: 14 }}>
            {item.shares}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by username..."
        placeholderTextColor="#888"
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
      />

      {searchText.length === 0 ? (
        <Text style={styles.emptyText}>Search here</Text>
      ) : (
        <FlatList
          data={filteredPosts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    margin: 10,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  card: {
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    elevation: 2,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  description: {
    paddingHorizontal: 10,
    paddingTop: 8,
    fontSize: 14,
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#aaa",
    fontSize: 16,
  },
});

export default SearchScreen;
