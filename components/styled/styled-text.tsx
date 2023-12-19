import React from "react";
import { Text, TextProps } from "react-native";
import Colors from "../../constants/Colors";

const StyledText = (props: TextProps) => {
  return (
    <Text
      style={[
        {
          color: Colors.foreground,
          fontFamily: "Poppins_Regular",
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};

export default StyledText;
