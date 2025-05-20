import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import AddHabitScreen from "../screens/AddHabit";
import StatsScreen from "../screens/Stats";
import { Ionicons } from "@expo/vector-icons";
import { MenuProvider } from "react-native-popup-menu";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <MenuProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Add":
                iconName = focused ? "add-circle" : "add-circle-outline";
                break;
              case "Stats":
                iconName = focused ? "bar-chart" : "bar-chart-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3F8EFC",
          tabBarInactiveTintColor: "gray",
          headerShown: true,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddHabitScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </MenuProvider>
  );
}
