export const Activity = {
Sedentary: "Sedentary: little to none(exercise)",
Light: "Light: exercise 1-3 times/week",
Moderate: "Moderate: exercise 4-5 times/week",
Active: "Active: Daily exercise or intense exercise 3-4 times/week",
VeryActive: "Very Active: intense exercise 6-7 times/week",
ExtraActive: "Extra Active: very intense exercise daily, or physical job"
} as const; 

export type ActivitiesFor = typeof Activity[keyof typeof Activity]

export const ActivityObj: Record<ActivitiesFor, number> = {
  [Activity.Sedentary]: 1.2,
  [Activity.Light]: 1.375,
  [Activity.Moderate]: 1.55,
  [Activity.Active]: 1.725,
  [Activity.VeryActive]: 1.9,
  [Activity.ExtraActive]: 2.0,
};
