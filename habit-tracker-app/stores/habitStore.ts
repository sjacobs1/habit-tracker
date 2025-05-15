import { create } from "zustand";
import { Habit } from "../models/habitModel";

interface HabitStore {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  //   removeHabit: (id: string) => void;
  //   updateHabit: (id: string, updatedHabit: Partial<Habit>) => void;
}

export const useHabitStore = create<HabitStore>((set, get) => ({
  habits: [],
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  // removeHabit: (id) => set((state) => ({ habits: state.habits.filter(habit => habit.id !== id) })),
  // updateHabit: (id, updatedHabit) => set((state) => ({
  //   habits: state.habits.map((habit) =>
  //     habit.id === id ? { ...habit, ...updatedHabit } : habit
  //   ),
}));
