import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import componentStyles from "../styles/componentStyles/componentStyles";

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

const DaysSelector = ({
  days,
  onToggle,
  selectedDays,
  containerStyle,
  buttonStyle,
  textStyle,
}: DaysSelectorProps) => {
  return (
    <View
      style={[componentStyles.daysSelectorContainer, containerStyle]}
    >
      {days.map((day) => {
        const isSelected = selectedDays.includes(day.value);
        return (
          <TouchableOpacity
            key={day.value}
            disabled={!onToggle}
            onPress={() => onToggle?.(day.value)}
            style={[
              componentStyles.dayButtonBase,
              {
                backgroundColor: isSelected ? "#3B82F6" : "#E5E7EB",
              },
              buttonStyle?.(isSelected),
            ]}
          >
            <Text
              style={[
                componentStyles.dayButtonTextBase,
                {
                  color: isSelected ? "white" : "black",
                },
                textStyle?.(isSelected),
              ]}
            >
              {day.initial}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DaysSelector;
