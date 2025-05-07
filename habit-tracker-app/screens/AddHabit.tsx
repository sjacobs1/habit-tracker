import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import { Formik } from "formik";
import { HabitCategory } from "../models/habitCategoryModel";
import { Habit } from "../models/habitModel";
import uuid from "react-native-uuid";
import { useHabitStore } from "../stores/habitStore";
import { habitCategories } from "../constants/habitCategories";
import { FontAwesome6 } from "@expo/vector-icons";
import DaysSelector from "../components/DaysSelector";
import { weekDays } from "../constants/daysOfTheWeek";
import TimeSelector from "../components/TimeSelector";

const AddHabit = () => {
  const addHabit = useHabitStore((state) => state.addHabit);
  const allDays = weekDays.map((day) => day.value);

  const addHabitSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(50, "Name is too long")
      .required("Name is required"),
    category: Yup.object().required("Category is required"),
    note: Yup.string().max(200, "Note is too long"),
    days: Yup.array().of(Yup.string()).min(1, "At least one day is required"),
    times: Yup.array().of(Yup.string()),
  });

  const initialValues = {
    name: "",
    category: null as HabitCategory | null,
    note: "",
    days: [] as string[],
    times: [] as string[],
  };

  const handleSubmit = (values: typeof initialValues) => {
    const newHabit: Habit = {
      id: uuid.v4(),
      category: values.category as HabitCategory,
      name: values.name,
      note: values.note,
      days: values.days,
      times: values.times,
      createdOn: new Date(),
    };

    addHabit(newHabit);
    console.log("New Habit Added:", newHabit);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={addHabitSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={{ gap: 20 }}>
            <View style={{ backgroundColor: "#E4E1DE" }}>
              <Text>habit name</Text>
              <TextInput
                placeholder="eg: drink water"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}
            </View>

            <View style={{ backgroundColor: "#E4E1DE" }}>
              <Text>Categories</Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  rowGap: 8,
                  columnGap: 8,
                }}
              >
                {habitCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => setFieldValue("category", category)}
                    style={{
                      width: "18%",
                      aspectRatio: 1,
                      backgroundColor: category.colors[1],
                      borderRadius: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 8,
                      gap: 3,
                      borderWidth: 1,
                      borderColor:
                        values.category?.id === category.id
                          ? category.colors[0]
                          : "transparent",
                    }}
                  >
                    <FontAwesome6
                      name={category.icon}
                      size={24}
                      color={category.colors[0]}
                    />
                    <Text style={{ color: category.colors[0] }}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.category && errors.category && (
                <Text style={{ color: "red" }}>{errors.category}</Text>
              )}
            </View>

            <View style={{ backgroundColor: "#E4E1DE" }}>
              <Text>Note</Text>
              <TextInput
                placeholder="here you can add an optional note"
                onChangeText={handleChange("note")}
                onBlur={handleBlur("note")}
                value={values.note}
              />
              {touched.note && errors.note && (
                <Text style={{ color: "red" }}>{errors.note}</Text>
              )}
            </View>

            <View style={{ backgroundColor: "#E4E1DE" }}>
              <Text>Repeat Days</Text>
              <TouchableOpacity
                onPress={() => {
                  const allSelected = allDays.every((day) =>
                    values.days.includes(day)
                  );
                  setFieldValue("days", allSelected ? [] : allDays);
                }}
                style={{
                  alignSelf: "flex-end",
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  backgroundColor: "#f3f4f6",
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontWeight: "600" }}>
                  {allDays.every((day) => values.days.includes(day))
                    ? "Clear All"
                    : "Everyday"}
                </Text>
              </TouchableOpacity>
              <DaysSelector
                days={weekDays}
                selectedDays={values.days}
                onToggle={(day) => {
                  const updatedDays = values.days.includes(day)
                    ? values.days.filter((d) => d !== day)
                    : [...values.days, day];
                  setFieldValue("days", updatedDays);
                }}
              />
              {touched.days && errors.days && (
                <Text style={{ color: "red" }}>{errors.days}</Text>
              )}
            </View>
            <View style={{ backgroundColor: "#E4E1DE" }}>
              <Text>Add Time</Text>
              <TimeSelector
                addTime={(time) => {
                  const updatedTimes = [...values.times, time];
                  setFieldValue("times", updatedTimes);
                }}
              />
              {touched.times && errors.times && (
                <Text style={{ color: "red" }}>{errors.times}</Text>
              )}
            </View>

            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text>submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddHabit;
