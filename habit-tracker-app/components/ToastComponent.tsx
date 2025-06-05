import React from "react";
import { View, Text } from "react-native";
import componentStyles from "../styles/componentStyles/componentStyles";

interface CustomToastProps {
  text1?: string;
  text2?: string;
}

const toastConfig = {
  success: ({ text1, text2 }: CustomToastProps) => (
    <View style={componentStyles.toastContainer}>
      {text1 && <Text style={componentStyles.toastText1}>{text1}</Text>}
      {text2 && <Text style={componentStyles.toastText2}>{text2}</Text>}
    </View>
  ),
};

export default toastConfig;
