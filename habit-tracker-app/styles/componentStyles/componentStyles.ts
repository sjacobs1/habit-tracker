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
    justifyContent: "center",
    alignItems: "center",
  },
  expandChevronContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
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



});

export default componentStyles;
