import { Image, Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

interface SongCardProps {
  songName: string;
  artistName: string;
  thumbnail: any;
}
const SongCardInline = ({ songName, artistName, thumbnail }: SongCardProps) => {
  return (
    <Link href={"/(app)/player"}>
      <View
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 80,
            height: "100%",
            backgroundColor: "transparent",
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <Image
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
            source={thumbnail}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {songName}
          </Text>
          <Text
            style={{
              fontSize: 16,

              color: "gray",
            }}
          >
            {artistName}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: "100%",
            marginLeft: "auto",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable>
            <AntDesign name="hearto" size={30} color="gray" />
          </Pressable>
        </View>
      </View>
    </Link>
  );
};

export default SongCardInline;
