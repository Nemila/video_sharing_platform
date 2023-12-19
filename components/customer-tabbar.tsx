import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import {
  DocumentIcon as DocumentIconOutline,
  HeartIcon as HeartIconOutline,
  HomeIcon as HomeIconOutline,
  UserIcon as UserIconOutline,
  VideoCameraIcon as VideoCameraIconOutline,
} from "react-native-heroicons/outline";

import {
  DocumentIcon as DocumentIconSolid,
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "react-native-heroicons/solid";
import Colors from "../constants/Colors";

interface IconObject {
  [key: string]: JSX.Element;
}

const iconsOutline: IconObject = {
  index: <HomeIconOutline size={28} color={Colors.foreground} />,
  report: <DocumentIconOutline size={28} color={Colors.foreground} />,
  feed: <HeartIconOutline size={28} color={Colors.foreground} />,
  profile: <UserIconOutline size={28} color={Colors.foreground} />,
};

const iconsSolid: IconObject = {
  index: <HomeIconSolid size={28} color={Colors.foreground} />,
  report: <DocumentIconSolid size={28} color={Colors.foreground} />,
  feed: <HeartIconSolid size={28} color={Colors.foreground} />,
  profile: <UserIconSolid size={28} color={Colors.foreground} />,
};

const CustomTabbar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.bottomBar,
        width: "100%",
        height: 90,
        padding: 16,
      }}
    >
      <SafeAreaView
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          if (route.name === "_sitemap") return;
          if (route.name === "[...404]") return;
          if (route.name === "modal") return <CentralButton key={route.key} />;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.key}
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isFocused ? iconsSolid[route.name] : iconsOutline[route.name]}
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    </View>
  );
};

const CentralButton = () => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 64,
        aspectRatio: 1 / 1,
        transform: [{ translateY: -25 }, { rotateZ: "-15deg" }],
      }}
    >
      <VideoCameraIconOutline size={32} color={Colors.foreground} />
    </TouchableOpacity>
  );
};

export default CustomTabbar;
