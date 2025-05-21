import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import HabitCard from "../components/HabitCard";
import globalStyles from "../styles/globalStyles/globalStyles";
import { useHabitStore } from "../stores/habitStore";
import { ScrollView } from "react-native-gesture-handler";
import returnWeekDay from "../utils/getWeekDay";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../navigation/navigationTypes";
import componentStyles from "../styles/componentStyles/componentStyles";

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
        <Text style={componentStyles.sectionTitleText}>Today's habits</Text>
        {todaysHabits.length > 0 ? (
          <HabitCard
            isTodaysHabit={true}
            habits={todaysHabits}
            expandedHabitId={expandedHabitId}
            setExpandedHabitId={setExpandedHabitId}
          />
        ) : (
          <View style={componentStyles.placeholderContainer}>
            <Text style={componentStyles.noHabitsText}>
              You have no habits scheduled for today.
            </Text>
            <Pressable onPress={() => navigation.navigate("Add")}>
              <Text style={componentStyles.addHabitLinkText}>
                + Add a habit
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      {notTodaysHabits.length > 0 && (
        <View>
          <Text style={componentStyles.sectionTitleText}>
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
