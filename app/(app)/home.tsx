import {
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { BlurView } from "expo-blur";
import SongCard from "@/components/SongCard";
import SongCardInline from "@/components/SongCardInline";
import { StatusBar } from "expo-status-bar";
const Home = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            paddingVertical: 10,
            paddingHorizontal: 20,
            gap: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 70,
              backgroundColor: "#322251",
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 10,
              gap: 20,
              borderRadius: 15,
            }}
          >
            <View
              style={{
                width: 60,
                height: "100%",
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <EvilIcons name="search" size={40} color="gray" />
            </View>
            <TextInput
              placeholder="Search song"
              placeholderTextColor={"gray"}
              style={{
                fontSize: 18,
                flex: 1,
                color: "gray",
                borderRadius: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
              }}
            >
              RECENTLY PLAYED
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                }}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <SongCard
              songName="rainy day"
              artistName="Moody"
              thumbnail={require("@/assets/images/songcover.png")}
            />
            <SongCard
              songName="Bloom"
              artistName="Troye Sivan"
              thumbnail={require("@/assets/images/songcover2.png")}
            />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
              }}
            >
              RECOMENTATIONS
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                }}
              >
                See all
              </Text>
            </Pressable>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            gap: 10,
          }}
        >
          <SongCardInline
            songName="rainy day"
            artistName="Moody"
            thumbnail={require("@/assets/images/songcover.png")}
          />
          <SongCardInline
            songName="Bloom"
            artistName="Troye Sivan"
            thumbnail={require("@/assets/images/songcover2.png")}
          />
          <SongCardInline
            songName="rainy day"
            artistName="Moody"
            thumbnail={require("@/assets/images/songcover.png")}
          />
          <SongCardInline
            songName="Bloom"
            artistName="Troye Sivan"
            thumbnail={require("@/assets/images/songcover2.png")}
          />
          <SongCardInline
            songName="rainy day"
            artistName="Moody"
            thumbnail={require("@/assets/images/songcover.png")}
          />
          <SongCardInline
            songName="Bloom"
            artistName="Troye Sivan"
            thumbnail={require("@/assets/images/songcover2.png")}
          />
          <SongCardInline
            songName="rainy day"
            artistName="Moody"
            thumbnail={require("@/assets/images/songcover.png")}
          />
          <SongCardInline
            songName="Bloom"
            artistName="Troye Sivan"
            thumbnail={require("@/assets/images/songcover2.png")}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
