import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Habit } from "../models/habitModel";
import DaysSelector from "./DaysSelector";
import { weekDays } from "../constants/daysOfTheWeek";
import componentStyles from "../styles/componentStyles/componentStyles";
import {
  MenuOption,
  MenuOptions,
  MenuTrigger,
  Menu,
} from "react-native-popup-menu";
import { useHabitStore } from "../stores/habitStore";

interface HabitCardProps {
  habits: Habit[];
  expandedHabitId: string | null;
  setExpandedHabitId: (id: string | null) => void;
}

const HabitCard = ({
  habits,
  expandedHabitId,
  setExpandedHabitId,
}: HabitCardProps) => {
  const deleteHabit = useHabitStore((state) => state.deleteHabit);

  const handleDelete = (habitName: string, onDelete: () => void) => {
    Alert.alert(
      "Delete Habit",
      `Are you sure you want to delete '${habitName}'?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: onDelete },
      ]
    );
  };

  return (
    <>
      {habits.map((habit) => {
        const isExpanded = expandedHabitId === habit.id;
        return (
          <Pressable
            onPress={() => setExpandedHabitId(isExpanded ? null : habit.id)}
            key={habit.id}
          >
            <View style={componentStyles.cardContainer}>
              <View
                style={[
                  componentStyles.cardHeader,
                  { borderColor: habit.category.colors[1] },
                ]}
              >
                <View
                  style={[
                    componentStyles.cardIconWrapper,
                    { backgroundColor: habit.category.colors[1] },
                  ]}
                >
                  <FontAwesome6
                    name={habit.category.icon}
                    size={20}
                    color={habit.category.colors[0]}
                  />
                </View>
                <View style={componentStyles.cardTextWrapper}>
                  <Text>{habit.name}</Text>
                  <Text
                    style={{ color: habit.category.colors[0], fontSize: 12 }}
                  >
                    {habit.category.name}
                  </Text>
                </View>
                <View style={componentStyles.cardRightIcon}>
                  <FontAwesome6 name="circle" size={24} color="lightgrey" />
                </View>
              </View>

              {isExpanded && (
                <View style={componentStyles.expandedContentWrapper}>
                  <View style={componentStyles.expandedInnerContainer}>
                    <View style={componentStyles.noteRow}>
                      <FontAwesome6 name="sticky-note" size={15} color="grey" />
                      {habit.note ? (
                        <Text style={componentStyles.noteText}>
                          {habit.note}
                        </Text>
                      ) : (
                        <Text style={componentStyles.noNoteText}>
                          no note added
                        </Text>
                      )}
                    </View>

                    <View style={componentStyles.calendarRow}>
                      <FontAwesome6 name="calendar" size={15} color="grey" />
                      <DaysSelector
                        days={weekDays}
                        selectedDays={habit.days}
                        containerStyle={{ justifyContent: "flex-start" }}
                        buttonStyle={(selected) => ({
                          backgroundColor: selected
                            ? habit.category.colors[1]
                            : "#F3F4F6",
                          width: 25,
                          height: 25,
                          borderRadius: 10,
                          borderColor: selected
                            ? habit.category.colors[0]
                            : "#F3F4F6",
                          borderWidth: 1,
                        })}
                        textStyle={(selected) => ({
                          color: selected ? "#323A49" : "#6B7280",
                          fontSize: 12,
                        })}
                      />
                    </View>

                    <View style={componentStyles.timeRow}>
                      <View style={componentStyles.clockRow}>
                        <FontAwesome6 name="clock" size={15} color="grey" />
                        <Text style={componentStyles.noteText}>
                          {habit.times && habit.times.length > 0
                            ? habit.times?.join(" • ")
                            : "all day"}
                        </Text>
                      </View>
                      <Menu style={{ justifyContent: "center" }}>
                        <MenuTrigger style={componentStyles.ellipsisContainer}>
                          <FontAwesome6
                            name="ellipsis-vertical"
                            size={20}
                            color="black"
                          />
                        </MenuTrigger>

                        <MenuOptions
                          customStyles={{
                            optionsContainer: {
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
                          }}
                        >
                          <MenuOption
                            onSelect={() =>
                              handleDelete(habit.name, () =>
                                deleteHabit(habit.id)
                              )
                            }
                          >
                            <View
                              style={{
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 10,
                                padding: 5,
                                paddingHorizontal: 10,
                              }}
                            >
                              <FontAwesome6
                                name="trash-can"
                                size={15}
                                color="red"
                              />
                              <Text style={{ color: "red" }}>Delete</Text>
                            </View>
                          </MenuOption>
                          <MenuOption onSelect={() => console.log("Edit")}>
                            <View
                              style={{
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 10,
                                padding: 5,
                                paddingHorizontal: 10,
                              }}
                            >
                              <FontAwesome6
                                name="edit"
                                size={15}
                                color="gray"
                              />
                              <Text>Edit</Text>
                            </View>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                    </View>
                  </View>
                </View>
              )}

              <View
                style={[
                  componentStyles.expandChevronContainer,
                  { backgroundColor: habit.category.colors[1] },
                ]}
              >
                {isExpanded ? (
                  <FontAwesome6
                    name="chevron-up"
                    size={18}
                    color={habit.category.colors[2]}
                  />
                ) : (
                  <FontAwesome6
                    name="chevron-down"
                    size={18}
                    color={habit.category.colors[2]}
                  />
                )}
              </View>
            </View>
          </Pressable>
        );
      })}
    </>
  );
};

export default HabitCard;
