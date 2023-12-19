import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/header";
import Banner from "../components/banner";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "#222831",
        flex: 1,
      }}
    >
      <SafeAreaView>
        <Header />
        <Banner />
      </SafeAreaView>
    </View>
  );
};

export default Home;
