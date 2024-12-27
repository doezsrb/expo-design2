import { Dimensions, Image, View } from "react-native";

const Circles = ({ children = null }: any) => {
  return (
    <View
      style={{
        top: -Dimensions.get("window").height / 10,
        width: Dimensions.get("window").width + 150,
        height: Dimensions.get("window").width + 150,
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          borderColor: "rgba(50,34,81,0.6)",
          borderRadius: "100%",
          borderWidth: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            height: "80%",
            borderColor: "#322251",
            borderWidth: 3,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "70%",
              borderColor: "#322251",
              borderWidth: 3,
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "80%",
                height: "80%",
                backgroundColor: "transparent",
              }}
            >
              {children}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Circles;
