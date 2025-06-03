import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button } from "react-native";
import React, { useState } from "react";

interface TimeSelectorProps {
  addTime: (time: string) => void;
}

const TimeSelector = ({ addTime }: TimeSelectorProps) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const handleTimeChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedTime(date);
      const timeString = date.toTimeString().slice(0, 5);
      addTime(timeString);
    }
  };

  return (
    <View>
      <DateTimePicker
        value={selectedTime || new Date()}
        mode="time"
        display="default"
        onChange={handleTimeChange}
      />
    </View>
  );
};

export default TimeSelector;
