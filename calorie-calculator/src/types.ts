import { type ActivitiesFor } from "./constants/activityObject";

export type Calculations = {
  age: number;
  height: number;
  weight: number;
}

export type Gender =  "male" | "female";

export type Inputs = {
  age: number | "";
  height: number | "";
  weight: number | "";
  gender: Gender;
  activity: ActivitiesFor;
}

export type PropsNumField = {
  label: string;
  value: number | "";
  onValue: (v: number | "") => void;
  placeholder?: string;
  min?: number;
  step?: number | "any";
  id?: string;
  suffix?: string;
};


type Option<T extends string> = { label: string; value: T };

export type PropsSelect<T extends string> = {
  label: string;
  value: T;
  onValue: (v: T) => void;
  options: Option<T>[];
  id?: string;
};

export type PropsResult = {
  bmr: number;
  tdee: number;
  bmi: number;
  bmiText: string;
};



