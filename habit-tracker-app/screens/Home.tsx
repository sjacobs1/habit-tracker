import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HabitCard from "../components/HabitCard";
import globalStyles from "../styles/globalStyles/globalStyles";
import { useHabitStore } from "../stores/habitStore";
import { ScrollView } from "react-native-gesture-handler";
import returnWeekDay from "../utils/getWeekDay";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../navigation/navigationTypes";

const Home = () => {
  const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();
  const [expandedHabitId, setExpandedHabitId] = useState<string | null>(null);
  const habits = useHabitStore((state) => state.habits);
  const dayOfWeekName = returnWeekDay();
  const todaysHabits = habits.filter((habit) =>
    habit.days.includes(dayOfWeekName)
  );
  const notTodaysHabits = habits.filter(
    (habit) => !habit.days.includes(dayOfWeekName)
  );

  return (
    <ScrollView style={globalStyles.pageContainer}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Today's habits</Text>
        {todaysHabits.length > 0 ? (
          <HabitCard
            isTodaysHabit={true}
            habits={todaysHabits}
            expandedHabitId={expandedHabitId}
            setExpandedHabitId={setExpandedHabitId}
          />
        ) : (
          <View style={{ alignItems: "center", padding: 20 }}>
            <Text style={{ fontStyle: "italic", color: "#666" }}>
              You have no habits scheduled for today.
            </Text>
            <Pressable onPress={() => navigation.navigate("Add")}>
              <Text style={{ color: "#3F8EFC", marginTop: 10 }}>
                + Add a habit
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      {notTodaysHabits.length > 0 && (
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Scheduled for another day
          </Text>
          <HabitCard
            isTodaysHabit={false}
            habits={notTodaysHabits}
            expandedHabitId={expandedHabitId}
            setExpandedHabitId={setExpandedHabitId}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
