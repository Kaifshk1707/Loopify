import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { posts } from "../../data/posts";
import GlobalHeader from "../../components/Headers/GlobalHeader";
import HomeStory from "../../components/Headers/HomeStory";
import AppAreaView from "../../components/View/safeAreaView";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseLike,
  increaseLike,
} from "../../store/homeReducers/homeReducer";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import { globalColor } from "../../styles/globalColors";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [likedPosts, setLikedPosts] = useState({});
  const [modal, setModal] = useState(false);

  const increaseLikes = useSelector(
    (state) => state.increaseTotalLikes.totalLike
  );

  const handleLike = (postId: any) => {
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
    <View
      style={{
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
      }}
    >
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
          {/* <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {item.userName.charAt(0).toUpperCase()}
          </Text> */}
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
          // gap: 5, // Optional if using RN >= 0.71
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

      {/* Likes count */}
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{item.likes} likes</Text>
      </View>

      {/* Description */}
      <View style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>{item.userName} </Text>
          {item.description}
        </Text>
      </View>

      {/* Comments placeholder */}
      <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
        <Text style={{ color: "gray" }}>View all {item.comments} comments</Text>
      </View>
    </View>
  );

  return (
    <AppAreaView style={{ flex: 1 }}>
      <GlobalHeader
        headerTitle={"Instagram"}
        onPressCreate={() => setModal(true)}
        onPressCheck={() => {}}
        onPressChat={() => navigation.navigate("ChatListScreen")}
      />
      <Modal
        visible={modal}
        transparent
        animationType="slide"
        onRequestClose={() => setModal(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModal(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "flex-end",
          }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                width: "100%",
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                paddingTop: 15,
                paddingBottom: 30,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <View
                  style={{
                    width: 40,
                    height: 5,
                    backgroundColor: "#ccc",
                    borderRadius: 3,
                  }}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15,alignSelf:"center" }}
              >
                Create
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePostScreen")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                  borderColor: globalColor.gray,
                  borderWidth: 0.3,
                  padding: "2%",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 18,
                    backgroundColor: globalColor.lightGray,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                  }}
                >
                  <AntDesign name="picture" size={30} color="black" />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>Post</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      <HomeStory />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </AppAreaView>
  );
};

export default HomeScreen;

// const postUrl = "https://dummyjson.com/posts";
// const [posts, setPosts] = useState([]);
// const getData = async () => {
//   try {
//     const response = await axios.get(postUrl);
//     console.log("=======>>>>>>", response.data);
//     setPosts(response.data.posts);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// useEffect(() => {
//   getData();
// }, []);
