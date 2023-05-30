import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";


export default function Item(props) {
  const { data } = props;
  const navigation = useNavigation();
  const ClickItem = () => {
    navigation.navigate("Detail",{data});
  }
  
  return (
    <TouchableOpacity onPress={ClickItem}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "#FFEDDE",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 96,
            height: 96,
            borderRadius: 10,
          }}
          source={{uri:data.hinhAnh[0]}}
        ></Image>
        <View
          style={{
            marginStart: 10,
            width: Dimensions.get("window").width - 96 - 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {data.ten}
          </Text>
          <Text numberOfLines={2}>{data.moTa}</Text>
          <Text
            style={{
              color: "green",
            }}
            numberOfLines={1}
          >
            {data.thoiGian}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
