import { useMemo } from "react";
import type { Inputs } from "../types";
import { calc as calcBMr } from "../utils/calculations";
import { ActivityObj } from "../constants/activityObject";

export function useBmrTdee(form: Inputs, valid: boolean) {
  const bmr = useMemo(() => {
    if (!valid) return null;
    return calcBMr(
      Number(form.age),
      Number(form.height),
      Number(form.weight),
      form.gender
    );
  }, [form.age, form.height, form.weight, form.gender, valid]);

  const tdee = useMemo(() => {
    if (bmr == null) return null;
    return bmr * ActivityObj[form.activity];
  }, [bmr, form.activity]);

  const bmi = useMemo(() => {
    if (!valid) return null;
    const h = Number(form.height) / 100;
    return Number(form.weight) / (h * h);
  }, [form.height, form.weight, valid]);

  const bmiLabel = (x: number) => {
    if (x < 18.5) return "Bajo peso";
    if (x < 25) return "Normal";
    if (x < 30) return "Sobrepeso";
    return "Obesidad";
  };

  return { bmr, tdee, bmi, bmiLabel };
}
