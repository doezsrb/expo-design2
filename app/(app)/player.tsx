import Header from "@/components/Header";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Feather, FontAwesome, Fontisto, Octicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
const PlayerPage = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={{
        flex: 1,
        overflow: "hidden",
        paddingHorizontal: 20,
        gap: 20,
        justifyContent: "space-around",
        paddingVertical: 10,
        flexDirection: "column",
      }}
    >
      <Header />

      <View
        style={{
          width: "100%",
          height: Dimensions.get("window").height / 3,

          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={require("@/assets/images/songcoverbig.png")}
        />
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Song Name
          </Text>
          <Text style={{ color: "gray" }}>Artist Name</Text>
        </View>
        <Pressable>
          <AntDesign name="hearto" size={30} color="gray" />
        </Pressable>
      </View>
      <View
        style={{
          width: "100%",
          height: 60,
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            width: "100%",
          }}
          source={require("@/assets/images/songline.png")}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "gray",
            }}
          >
            0:40
          </Text>
          <Text
            style={{
              color: "gray",
            }}
          >
            3:50
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 80,
          gap: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "16%",
            height: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="shuffle" size={24} color="white" />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "row",
            alignItems: "center",

            gap: 10,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="caretleft" size={24} color="white" />
          </View>
          <View
            style={{
              width: 80,
              height: "100%",
              backgroundColor: "#9668EF",
              shadowColor: "#9668EF",
              shadowRadius: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 60,
            }}
          >
            <Fontisto name="pause" size={20} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="caretright" size={24} color="white" />
          </View>
        </View>
        <View
          style={{
            width: "16%",
            height: "100%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Octicons name="download" size={24} color="white" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PlayerPage;
