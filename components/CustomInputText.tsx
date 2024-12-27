import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

interface CustomInputTextProps {
  placeholder: string;
  onChange?: Function;
  leftImage?: any;
  rightImage?: any;
}
const CustomInputText = ({
  placeholder,
  onChange,
  leftImage,
  rightImage,
}: CustomInputTextProps) => {
  const [value, setValue] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(rightImage != null);
  return (
    <View
      style={{
        width: "100%",
        overflow: "hidden",

        borderRadius: 10,
        backgroundColor: "#322251",

        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {leftImage}
      </View>
      <TextInput
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
          onChange && onChange(e.target.value);
        }}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        style={{
          paddingVertical: 18,
          color: "white",
          fontSize: 20,
          width: "65%",
        }}
      />
      <Pressable
        onPress={() => {
          if (rightImage != null) {
            setSecureTextEntry((old: any) => !old);
          }
        }}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rightImage}
      </Pressable>
    </View>
  );
};

export default CustomInputText;
