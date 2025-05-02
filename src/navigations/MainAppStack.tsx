import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { useEffect, useState } from "react";
import MainAppBottomTab from "./MainBottomTab";
import HomeScreen from "../screens/Home/HomeScreen";
import ChatListScreen from "../components/Chats/ChatListScreen";
import ChatScreen from "../components/Chats/ChatScreen";

const Stack = createStackNavigator();

const MainAppStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName={"AuthStack"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTab" component={MainAppBottomTab} />
      <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
export default MainAppStack;
