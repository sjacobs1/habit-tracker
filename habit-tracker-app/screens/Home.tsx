import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HabitCard from "../components/HabitCard";
import globalStyles from "../styles/globalStyles/globalStyles";
import { useHabitStore } from "../stores/habitStore";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const [expandedHabitId, setExpandedHabitId] = useState<string | null>(null);

  const habits = useHabitStore((state) => state.habits);
  const today = new Date();
const dayOfWeekNumber = today.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

console.log("Today is " + dayOfWeekName);


  return (
    <ScrollView style={globalStyles.pageContainer}>
      <View>
        <Text>Today's habits</Text>
        <HabitCard
          habits={habits.filter((habit) => habit.days.includes(dayOfWeekName))}
          expandedHabitId={expandedHabitId}
          setExpandedHabitId={setExpandedHabitId}
        />
      </View>
      <View>
        <Text>Other habits</Text>
        <HabitCard
          habits={habits.filter((habit) => !habit.days.includes(dayOfWeekName))}
          expandedHabitId={expandedHabitId}
          setExpandedHabitId={setExpandedHabitId}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
