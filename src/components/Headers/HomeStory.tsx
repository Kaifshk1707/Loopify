import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { posts } from "../../data/posts";
import { globalColor } from "../../styles/globalColors";

interface HomeStoryProps {
  onPress: () => void;
}

const HomeStory: FC<HomeStoryProps> = ({ onPress }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ alignItems: "center", marginHorizontal: 8 }}
      >
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
      </TouchableOpacity>
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
