import Circles from "@/components/Circles";
import CustomInputText from "@/components/CustomInputText";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { Redirect, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [username_, setUsername_] = useState("");
  if (username != "") {
    return <Redirect href={"/(app)/home"} />;
  }
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={{
          width: "100%",
          height: Dimensions.get("screen").height,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
          style={{
            position: "absolute",
            left: 30,
            top: 20,
            zIndex: 2,
          }}
        >
          <AntDesign name="arrowleft" size={40} color="white" />
        </Pressable>
        <Circles></Circles>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 35,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Login your account
          </Text>
          <CustomInputText
            onChange={(username: string) => {
              setUsername_(username);
            }}
            placeholder="Email"
            leftImage={<Fontisto name="email" size={20} color="gray" />}
          />
          <CustomInputText
            placeholder="Password"
            leftImage={<Fontisto name="email" size={20} color="gray" />}
            rightImage={
              <FontAwesome5 name="eye-slash" size={20} color="gray" />
            }
          />

          <Pressable
            onPress={() => {
              setUsername(username_);
            }}
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "#9668EF",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Login
            </Text>
          </Pressable>
          <Text
            style={{
              color: "#9668EF",
              fontSize: 20,
            }}
          >
            Forgot password
          </Text>
          <View
            style={{
              width: "100%",
              height: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "white",
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 17,
              }}
            >
              or continue with
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "white",
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                backgroundColor: "lightgray",
              }}
            ></View>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                backgroundColor: "lightgray",
              }}
            ></View>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                backgroundColor: "lightgray",
              }}
            ></View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "lightgray",

                fontSize: 17,
              }}
            >
              Don't have an account?
            </Text>
            <Pressable>
              <Text
                style={{
                  color: "#9668EF",
                  fontSize: 17,
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginPage;
