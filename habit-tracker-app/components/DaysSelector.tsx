import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Day {
  value: string;
  initial: string;
}

interface DaysSelectorProps {
  days: Day[];
  onToggle?: (day: string) => void;
  selectedDays: string[];
  buttonStyle?: (isSelected: boolean) => object;
  containerStyle?: object;
  textStyle?: (isSelected: boolean) => object;
}


const DaysSelector = ({ days, onToggle, selectedDays, containerStyle, buttonStyle, textStyle }: DaysSelectorProps) => {
  return (
    <View style={[{flexDirection: "row", justifyContent: "space-evenly"}, containerStyle ]}>
      {days.map((day) => {
        const isSelected = selectedDays.includes(day.value);
        return (
          <TouchableOpacity
            key={day.value}
            disabled={!onToggle}
            onPress={() => onToggle?.(day.value)}
            style={[{
              width: 36,
              height: 36,
              borderRadius: 18,
              marginHorizontal: 4,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isSelected ? "#3B82F6" : "#E5E7EB",
      }, buttonStyle?.(isSelected)]}
          >
            <Text style={[{ color: isSelected ? "white" : "black" }, textStyle?.(isSelected)]}>{day.initial}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DaysSelector;
