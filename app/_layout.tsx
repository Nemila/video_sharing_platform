import { Tabs } from "expo-router";
import CustomTabbar from "../components/customer-tabbar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const _ = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Tabs
      tabBar={(props) => <CustomTabbar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="report" />
      <Tabs.Screen name="modal" />
      <Tabs.Screen name="feed" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
