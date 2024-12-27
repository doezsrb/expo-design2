import Circles from "@/components/Circles";
import { Stack, useNavigation } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const Index = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Circles>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("@/assets/images/headphones.png")}
          />
        </Circles>
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              gap: 50,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Getting Started
              </Text>
              <Text
                style={{
                  fontSize: 14,

                  color: "lightgrey",
                }}
              >
                Getting Started Getting
              </Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("login" as never);
              }}
              style={{
                backgroundColor: "#9668EF",
                paddingHorizontal: 50,
                paddingVertical: 15,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 17,

                  color: "white",
                }}
              >
                Let go
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 25,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Stanca
          </Text>
          <Text
            style={{
              color: "lightgrey",
            }}
          >
            Rest music app
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
