import { HabitCategory } from "../models/habitCategoryModel";

export const habitCategories: HabitCategory[] = [
  {
    id: "growth",
    name: "GROWTH",
    colors: ["#8B5CF6", "#F1ECFE"],
    icon: "lightbulb",
  },
  {
    id: "lifestyle",
    name: "LIFESTYLE",
    colors: ["#10B981", "#ECFDF8"],
    icon: "house-chimney-user",
  },
  {
    id: "health",
    name: "HEALTH",
    colors: ["#EF4444", "#FDECEC"],
    icon: "heart-pulse",
  },
  {
    id: "work",
    name: "WORK",
    colors: ["#3B82F6", "#ECF3FE"],
    icon: "briefcase",
  },
  {
    id: "finance",
    name: "FINANCE",
    colors: ["#F59E0B", "#FEF7EB"],
    icon: "sack-dollar",
  },
  {
    id: "hobby",
    name: "HOBBY",
    colors: ["#EC4899", "#FDEDF5"],
    icon: "palette",
  },
  {
    id: "social",
    name: "SOCIAL",
    colors: ["#CA776C", "#FAF1F0"],
    icon: "people-group",
  },
  {
    id: "faith",
    name: "FAITH",
    colors: ["#6031B3", "#F3EFFB"],
    icon: "hands-praying",
  },
  {
    id: "wins",
    name: "SMALL WINS",
    colors: ["#FBBF24", "#F3EFFB"],
    icon: "medal",
  },
  {
    id: "other",
    name: "OTHER",
    colors: ["#6B7280", "#F3F4F6"],
    icon: "question",
  },
];
