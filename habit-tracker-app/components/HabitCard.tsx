import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Habit } from "../models/habitModel";
import DaysSelector from "./DaysSelector";
import { weekDays } from "../constants/daysOfTheWeek";

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
  return (
    <>
      {habits.map((habit) => {
        const isExpanded = expandedHabitId === habit.id;
        return (
          <Pressable
            onPress={() => setExpandedHabitId(isExpanded ? null : habit.id)}
            key={habit.id}
          >
            <View
              style={{
                backgroundColor: "white",
                marginBottom: 20,
                borderRadius: 5,
                shadowColor: "grey",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3.84,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  borderColor: habit.category.colors[1],
                  borderBottomWidth: 2,
                }}
              >
                <View
                  style={{
                    backgroundColor: habit.category.colors[1],
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <FontAwesome6
                    name={habit.category.icon}
                    size={20}
                    color={habit.category.colors[0]}
                  />
                </View>
                <View style={{ flex: 5, paddingHorizontal: 10 }}>
                  <Text>{habit.name}</Text>
                  <Text
                    style={{ color: habit.category.colors[0], fontSize: 12 }}
                  >
                    {habit.category.name}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome6
                    name="circle"
                    size={24}
                    color="lightgrey"
                  />
                </View>
              </View>
              {isExpanded && (
                <View
                  style={{
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}
                >
                  <View style={{ flex: 1, marginLeft: 6, gap: 15 }}>
                    <View
                      style={{
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 25,
                      }}
                    >
                      <FontAwesome6 name="sticky-note" size={15} color="grey" />
                      {habit.note ? (
                        <Text style={{ flexShrink: 1, color: "#5C5C5C" }}>
                          {habit.note}
                        </Text>
                      ) : (
                        <Text
                          style={{ color: "lightgrey", fontStyle: "italic" }}
                        >
                          no note added
                        </Text>
                      )}
                    </View>

                    <View
                      style={{
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <FontAwesome6 name="calendar" size={15} color="grey" />
                      <DaysSelector
                        days={weekDays}
                        selectedDays={habit.days}
                        containerStyle={{
                          justifyContent: "flex-start",
                        }}
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
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          padding: 10,
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 25,
                        }}
                      >
                        <FontAwesome6 name="clock" size={15} color="grey" />
                        <Text style={{ color: "#5C5C5C" }}>
                          {habit.times && habit.times.length > 0
                            ? habit.times?.join(", ")
                            : "all day"}
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text>
                          <FontAwesome6
                            name="ellipsis-vertical"
                            size={24}
                            color="black"
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              <View
                style={{
                  backgroundColor: habit.category.colors[1],
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  alignItems: "center",
                }}
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
