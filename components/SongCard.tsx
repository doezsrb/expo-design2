import { BlurView } from "expo-blur";
import { ImageBackground, Text, View } from "react-native";

interface SongCardProps {
  songName: string;
  artistName: string;
  thumbnail: any;
}
const SongCard = ({ songName, artistName, thumbnail }: SongCardProps) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 15,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ImageBackground
        imageStyle={{
          resizeMode: "stretch",
        }}
        source={thumbnail}
        style={{
          width: "100%",
          height: 250,
        }}
      ></ImageBackground>
      <BlurView
        intensity={20}
        style={{
          position: "absolute",
          width: "100%",
          height: "30%",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 5,
          bottom: 0,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {songName}
        </Text>
        <Text
          style={{
            color: "white",
          }}
        >
          {artistName}
        </Text>
      </BlurView>
    </View>
  );
};

export default SongCard;
