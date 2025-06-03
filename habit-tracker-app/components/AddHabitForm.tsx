import { View, Text, Keyboard, Alert, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useHabitStore } from '../stores/habitStore';
import { weekDays } from '../constants/daysOfTheWeek';
import * as Yup from "yup";
import { HabitCategory } from '../models/habitCategoryModel';
import { Habit } from '../models/habitModel';
import uuid from "react-native-uuid";
import globalStyles from '../styles/globalStyles/globalStyles';
import { Formik } from 'formik';
import componentStyles from '../styles/componentStyles/componentStyles';
import { habitCategories } from '../constants/habitCategories';
import { FontAwesome6 } from '@expo/vector-icons';
import DaysSelector from './DaysSelector';
import TimeSelector from './TimeSelector';

const AddHabitForm = () => {
  const addHabit = useHabitStore((state) => state.addHabit);
  const allDays = weekDays.map((day) => day.value);
  const [showFirstTimeRow, setShowFirstTimeRow] = useState(false);
  const [showSecondTimeRow, setShowSecondTimeRow] = useState(false);
  const [showThirdTimeRow, setShowThirdTimeRow] = useState(false);

  const [timeRows, setTimeRows] = useState(0);

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

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
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
    Keyboard.dismiss();

    Alert.alert("Habit added", `${values.name}`, [
      { text: "OK", onPress: () => resetForm() },
    ]);

    setTimeRows(0);
    setShowFirstTimeRow(false);
    setShowSecondTimeRow(false);
    setShowThirdTimeRow(false);
  };

  const handlePlusTime = () => {
    if (!showFirstTimeRow) {
      setShowFirstTimeRow(true);
      setTimeRows((prev) => prev + 1);
    } else if (!showSecondTimeRow) {
      setShowSecondTimeRow(true);
      setTimeRows((prev) => prev + 1);
    } else if (!showThirdTimeRow) {
      setShowThirdTimeRow(true);
      setTimeRows((prev) => prev + 1);
    }
  };

  return (
    <View style={globalStyles.pageContainer}>
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
          <View style={componentStyles.formContainer}>
            <View style={globalStyles.simpleContainer}>
              <Text>habit name</Text>
              <TextInput
                placeholder="eg: drink water"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={globalStyles.textInput}
              />
              {touched.name && errors.name && (
                <Text style={globalStyles.errorText}>{errors.name}</Text>
              )}
            </View>

            <View style={componentStyles.categoryScrollContainer}>
              <Text style={componentStyles.categoryLabel}>Categories</Text>
              <ScrollView
                contentContainerStyle={globalStyles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {habitCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => setFieldValue("category", category)}
                    style={[
                      componentStyles.categoryIcons,
                      {
                        backgroundColor: category.colors[1],
                        borderColor:
                          values.category?.id === category.id
                            ? category.colors[0]
                            : "transparent",
                      },
                    ]}
                  >
                    <FontAwesome6
                      name={category.icon}
                      size={24}
                      color={category.colors[0]}
                    />
                    <Text
                      style={[
                        componentStyles.categoryText,
                        { color: category.colors[0] },
                      ]}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {touched.category && errors.category && (
                <Text style={globalStyles.errorText}>{errors.category}</Text>
              )}
            </View>

            <View style={globalStyles.simpleContainer}>
              <Text>Note</Text>
              <TextInput
                placeholder="here you can add an optional note"
                onChangeText={handleChange("note")}
                onBlur={handleBlur("note")}
                value={values.note}
                style={globalStyles.textInput}
              />
              {touched.note && errors.note && (
                <Text style={globalStyles.errorText}>{errors.note}</Text>
              )}
            </View>

            <View style={globalStyles.simpleContainer}>
              <Text>Repeat Days</Text>
              <TouchableOpacity
                onPress={() => {
                  const allSelected = allDays.every((day) =>
                    values.days.includes(day)
                  );
                  setFieldValue("days", allSelected ? [] : allDays);
                }}
                style={componentStyles.repeatDaily}
              >
                <Text style={componentStyles.repeatDailyText}>
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
                <Text style={globalStyles.errorText}>{errors.days}</Text>
              )}
            </View>

            <View style={globalStyles.simpleContainer}>
              <Text>Add Time</Text>
              {showFirstTimeRow === true && (
                <>
                  <View
                    style={{
                      backgroundColor: "lightgreen",
                      flexDirection: "row",
                    }}
                  >
                    <TimeSelector
                      addTime={(time) => {
                        const updatedTimes = [...values.times];
                        updatedTimes[0] = time;
                        setFieldValue("times", updatedTimes);
                      }}
                    />
                    <Button
                      title="-"
                      onPress={() => {
                        setShowFirstTimeRow(false);
                        setTimeRows(timeRows - 1);
                      }}
                    />
                  </View>
                </>
              )}

              {showSecondTimeRow === true && (
                <>
                  <View
                    style={{
                      backgroundColor: "lightgreen",
                      flexDirection: "row",
                    }}
                  >
                    <TimeSelector
                      addTime={(time) => {
                        const updatedTimes = [...values.times];
                        updatedTimes[1] = time;
                        setFieldValue("times", updatedTimes);
                      }}
                    />
                    <Button
                      title="-"
                      onPress={() => {
                        setShowSecondTimeRow(false);
                        setTimeRows(timeRows - 1);
                      }}
                    />
                  </View>
                </>
              )}

              {showThirdTimeRow === true && (
                <>
                  <View
                    style={{
                      backgroundColor: "lightgreen",
                      flexDirection: "row",
                    }}
                  >
                    <TimeSelector
                      addTime={(time) => {
                        const updatedTimes = [...values.times];
                        updatedTimes[2] = time;
                        setFieldValue("times", updatedTimes);
                      }}
                    />
                    <Button
                      title="-"
                      onPress={() => {
                        setShowThirdTimeRow(false);
                        setTimeRows(timeRows - 1);
                      }}
                    />
                  </View>
                </>
              )}

              {timeRows < 3 && (
                <Button title="+plus" onPress={handlePlusTime} />
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

export default AddHabitForm