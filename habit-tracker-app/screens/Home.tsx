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

  return (
    <ScrollView style={globalStyles.pageContainer}>
      <View>
        <HabitCard
          habits={habits}
          expandedHabitId={expandedHabitId}
          setExpandedHabitId={setExpandedHabitId}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
