import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import StyledText from "./styled/styled-text";
import Colors from "../constants/Colors";

const Banner = () => {
  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          backgroundColor: Colors.lightGray,
          borderRadius: 16,
          overflow: "hidden",
          flexDirection: "row",
          alignItems: "center",
          minHeight: 200,
        }}
      >
        <View
          style={{
            gap: 14,
            flex: 1,
            padding: 24,
            height: "100%",
          }}
        >
          <StyledText
            style={{
              fontSize: 22,
              fontFamily: "Poppins_Bold",
            }}
          >
            It doesn't need to be too long
          </StyledText>

          <StyledText style={{ fontSize: 12 }}>
            Just long enough to be enjoyable, and we can help with that.
          </StyledText>

          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 16,
              backgroundColor: Colors.primary,
            }}
          >
            <StyledText
              style={{
                fontFamily: "Poppins_Medium",
                textAlign: "center",
              }}
            >
              Start Creating
            </StyledText>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://www.billboard.com/wp-content/uploads/2023/04/THE-SUPER-MARIO-BROS.-MOVIE-billboard-1548.jpg",
          }}
          resizeMode="cover"
          style={{
            flex: 1,
            height: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default Banner;
