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
  formContainer: {
    gap: 20,
  },
  categoryScrollContainer: {
    marginHorizontal: -20,
  },
  categoryLabel: {
    paddingLeft: 20,
  },
  categoryText: {
    textAlign: "center",
  },
  repeatDailyText: {
    fontWeight: "600",
  },
  toastContainer: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderRadius: 8,
    borderColor: "#1cae17",
    borderLeftWidth: 7,
  },
  toastText1: {
    fontWeight: "bold",
  },
  toastText2: {
    fontWeight: "300",
  },

  // HabitCard styles
  cardContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
  },
  cardIconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cardTextWrapper: {
    flex: 5,
    paddingHorizontal: 10,
  },
  cardRightIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  expandedContentWrapper: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  expandedInnerContainer: {
    flex: 1,
    marginLeft: 6,
    gap: 15,
  },
  noteRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  calendarRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  noteText: {
    flexShrink: 1,
    color: "#5C5C5C",
  },
  noNoteText: {
    color: "lightgrey",
    fontStyle: "italic",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clockRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  ellipsisContainer: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  expandChevronContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
  },
  menuOptionsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    alignSelf: "flex-start",
    minWidth: 0,
    width: "auto",
    marginTop: -55,
    elevation: 1,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    padding: 5,
  },
  editMenuRowOption: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 5,
    paddingHorizontal: 10,
  },

  // DaysSelector styles
  daysSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dayButtonBase: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  dayButtonTextBase: {
    // color is handled dynamically in the component
  },

  //home page styles
  sectionTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  placeholderContainer: {
    alignItems: "center",
    padding: 20,
  },
  noHabitsText: { fontStyle: "italic", color: "#666" },
  addHabitLinkText: { color: "#3F8EFC", marginTop: 10 },
});

export default componentStyles;
