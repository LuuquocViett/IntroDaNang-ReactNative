import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import Item from "./Item";
import du_lieu from '../database/data/data.firebase.js' 

export default function ListScreen() {

  const [isLoading,setisLoading] = useState(false);
  const [data,setData] = useState([]);
  const [error,setError] = useState([]);
  const [fullData,setFullData] = useState([]);
  const [searchQuery,setsearchQuery] = useState("");

  useEffect(() => {
    setisLoading(true);
  })

  const handeSearch = (query) => {
    setsearchQuery(query);
  }

  return (
    <View style={{
      flex:1,
        margin: 10
    }}>
      <View style={{
        marginTop: 30,
        marginBottom: 10
      }}>
        <TextInput placeholder="Tìm kiếm" 
        value={searchQuery}
        onChangeText={(query) => handeSearch(query)}
        clearButtonMode="always" 
        autoCapitalize="none" 
        autoCorrect={false} 
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 10
        }}></TextInput>
      </View>
      <Text style={{
        fontSize: 20,
        marginBottom: 5
      }}>Danh sách địa điểm</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={du_lieu}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


