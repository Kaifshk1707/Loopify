import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import NotificationScreen from "../screens/Notification/Notificationscreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { globalColor } from "../styles/globalColors";

const Tab = createBottomTabNavigator();

const MainAppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? "home" : "home-outline",
            Search: focused ? "search" : "search-outline",
            Notifications: focused ? "heart" : "heart-outline",
            Profile: focused ? "person" : "person-outline",
          };

          return <Ionicons name={icons[route.name]} size={30} color={color} />;
        },
        tabBarActiveTintColor: globalColor.skyBlue,
        tabBarInactiveTintColor: globalColor.darkGray,
        tabBarStyle: {
          backgroundColor: globalColor.white,
          borderTopWidth: 0.5,
          borderTopColor: "black",
          height: 50,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainAppBottomTab;
