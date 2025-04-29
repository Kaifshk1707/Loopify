import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { posts } from "../../data/posts";
import { globalColor } from "../../styles/globalColors";

const HomeStory = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: "center", marginHorizontal: 8 }}>
        {/* Story Circle with Image */}
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: globalColor.red, 
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.profileImage }}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
            }}
          />
        </View>
        {/* Username */}
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            color: "#000",
            maxWidth: 70,
            textAlign: "center",
          }}
          numberOfLines={1}
        >
          {item.userName}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        data={posts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default HomeStory;
