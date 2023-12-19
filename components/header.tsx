import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BellIcon } from "react-native-heroicons/outline";
import StyledText from "./styled/styled-text";
import Colors from "../constants/Colors";

const Header = () => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c98a07e-7cbb-430d-877b-e6e6974efe7f/dfinfxf-07ace68a-c6ae-40ea-bb6c-a2975154745c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjOThhMDdlLTdjYmItNDMwZC04NzdiLWU2ZTY5NzRlZmU3ZlwvZGZpbmZ4Zi0wN2FjZTY4YS1jNmFlLTQwZWEtYmI2Yy1hMjk3NTE1NDc0NWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0FdqldZzvHCW65RjiIGkqRrWWKBMoHMIrFfR2xSQWR0",
              }}
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </View>

          <View>
            <StyledText
              style={{
                fontFamily: "Poppins_Bold",
                fontSize: 20,
              }}
            >
              John Doe
            </StyledText>

            <StyledText>Createur Youtube</StyledText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: Colors.primary,
              borderWidth: 1,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 16,
            }}
          >
            <StyledText
              style={{ color: Colors.primary, fontFamily: "Poppins-Medium" }}
            >
              Become Pro
            </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={{ position: "relative" }}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 100,
                backgroundColor: "red",
                position: "absolute",
                right: 4,
                zIndex: 1,
              }}
            />
            <BellIcon color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
