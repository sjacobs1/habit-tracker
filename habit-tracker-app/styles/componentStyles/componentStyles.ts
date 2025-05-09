import { StyleSheet } from "react-native";

const componentStyles = StyleSheet.create({
  //addHabitPage styles
  categoryIcons: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 3,
    borderWidth: 1,
    marginRight: 10,
  },
  repeatDaily: {
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default componentStyles;
