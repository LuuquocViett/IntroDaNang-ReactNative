import React from "react";
import { View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "./Detail";
import Splash from "./SplashScreen";
import ListScreen from "./ListScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const News = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#F18934",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={News}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Icon
                  name={focused ? "newspaper" : "newspaper-outline"}
                  size={focused ? 20 : 18}
                  color={focused ? "#fff" : "#ccc"}
                />
                <Text
                  style={{
                    color: focused ? "#fff" : "#ccc",
                    fontSize: 12,
                  }}
                >
                  Trang chủ
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Splash}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Icon
                  name={focused ? "settings" : "settings-outline"}
                  size={focused ? 20 : 18}
                  color={focused ? "#fff" : "#ccc"}
                />
                <Text
                  style={{
                    color: focused ? "#fff" : "#ccc",
                    fontSize: 12,
                  }}
                >
                  Cài đặt
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
