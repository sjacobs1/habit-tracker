import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Day {
  value: string;
  initial: string;
}

interface DaysSelectorProps {
  days: Day[];
  onToggle: (day: string) => void;
  selectedDays: string[];
}

const DaysSelector = ({ days, onToggle, selectedDays }: DaysSelectorProps) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      {days.map((day) => {
        const isSelected = selectedDays.includes(day.value);
        return (
          <TouchableOpacity
            key={day.value}
            onPress={() => onToggle(day.value)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isSelected ? "#3B82F6" : "#E5E7EB",
            }}
          >
            <Text style={{color: isSelected ? "white" : "black"}}>{day.initial}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DaysSelector;
