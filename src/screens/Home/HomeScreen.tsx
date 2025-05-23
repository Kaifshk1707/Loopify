import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { posts } from "../../data/posts";
import GlobalHeader from "../../components/Headers/GlobalHeader";
import HomeStory from "../../components/Headers/HomeStory";
import AppAreaView from "../../components/View/safeAreaView";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation()

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
              borderRadius:100,
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
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <FontAwesome name="heart-o" size={22} color="black" />
          <Text style={{ marginLeft: 5, color: "black", fontSize: 14 }}>
            {item.likes}
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
        headerTitle={"Loopify"}
        onPressCreate={() => {}}
        onPressCheck={() => {}}
        onPressChat={() => navigation.navigate("ChatListScreen")}
      />
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