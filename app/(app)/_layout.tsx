import Header from "@/components/Header";
import { Slot, Stack } from "expo-router";
import { ImageBackground, ScrollView, View } from "react-native";

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "purple",
      }}
    ></Stack>
  );
};

export default AppLayout;
