import { Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
const Header = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("nav");
    console.log(navigation);
  }, [navigation]);
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: 60,
          height: "100%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </Pressable>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          paddingHorizontal: 10,
        }}
      >
        Rainy day
      </Text>
      <View
        style={{
          width: 60,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="menu" size={30} color="white" />
      </View>
    </View>
  );
};

export default Header;
