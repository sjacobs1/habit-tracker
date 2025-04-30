import { HabitCategory } from "./habitCategoryModel";

export interface Habit {
  id: string;
  category: HabitCategory;
  name: string;
  note: string;
  days: string[];
  times: string[];
  createdOn: Date;
}
