import { HabitCategory } from "../models/habitCategoryModel";

export const habitCategories: HabitCategory[] = [
  {
    id: "growth",
    name: "growth",
    colors: ["#8B5CF6", "#F1ECFE"],
    icon: "lightbulb",
  },
  {
    id: "health",
    name: "health",
    colors: ["#EF4444", "#FDECEC"],
    icon: "heart-pulse",
  },
  {
    id: "lifestyle",
    name: "lifestyle",
    colors: ["#10B981", "#ECFDF8"],
    icon: "house-chimney-user",
  },
  {
    id: "social",
    name: "social",
    colors: ["#CA776C", "#FAF1F0"],
    icon: "people-group",
  },
  {
    id: "finance",
    name: "finance",
    colors: ["#F59E0B", "#FEF7EB"],
    icon: "sack-dollar",
  },
  {
    id: "work",
    name: "work",
    colors: ["#3B82F6", "#ECF3FE"],
    icon: "briefcase",
  },
  {
    id: "faith",
    name: "faith",
    colors: ["#6031B3", "#F3EFFB"],
    icon: "hands-praying",
  },
  {
    id: "hobby",
    name: "hobby",
    colors: ["#EC4899", "#FDEDF5"],
    icon: "palette",
  },
  {
    id: "wins",
    name: "wins",
    colors: ["#FAB80F", "#FFF9EB"],
    icon: "medal",
  },
  {
    id: "other",
    name: "other",
    colors: ["#6B7280", "#F3F4F6"],
    icon: "question",
  },
];
