import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import { posts } from "../../data/posts";
import { globalColor } from "../../styles/globalColors";

const { width, height } = Dimensions.get("window");

const StoryView = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  const startProgress = () => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) goToNext();
    });
  };

  const goToNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.goBack(); // close story view
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    startProgress();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Top progress bars */}
      <View style={styles.progressContainer}>
        {posts.map((_, i) => (
          <View key={i} style={styles.progressBarBackground}>
            <Animated.View
              style={[
                styles.progressBarForeground,
                i === currentIndex && {
                  width: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
                i < currentIndex && { width: "100%",backgroundColor: globalColor.darkGray },
                i > currentIndex && { width: "0%" },
              ]}
            />
          </View>
        ))}
      </View>

      {/* Tap areas: left for prev, right for next */}
      <View style={styles.touchWrapper}>
        <TouchableWithoutFeedback onPress={goToPrev}>
          <View style={styles.leftTouch} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={goToNext}>
          <View style={styles.rightTouch} />
        </TouchableWithoutFeedback>
      </View>

      {/* Story image */}
      <Image
        source={{ uri: posts[currentIndex].image }}
        style={styles.storyImage}
      />

      {/* Username overlay */}
      <View style={styles.userOverlay}>
        <Text style={styles.username}>{posts[currentIndex].userName}</Text>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  progressContainer: {
    position: "absolute",
    top: 40,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    zIndex: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: "#555",
    marginHorizontal: 2,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarForeground: {
    height: 3,
    backgroundColor: "#fff",
  },
  storyImage: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  userOverlay: {
    position: "absolute",
    top: 50,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  touchWrapper: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  leftTouch: {
    width: "50%",
    height: "100%",
  },
  rightTouch: {
    width: "50%",
    height: "100%",
  },
});
