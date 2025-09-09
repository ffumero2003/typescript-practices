import { use, useMemo } from "react";
import type { Inputs, Results } from "../types";
import { Calculations } from "../utils/calculations";

export function UseDiscount(form: Inputs, valid: Boolean){
  const result = useMemo<Results | null>(() => {
    if(!valid) return null;
    return Calculations(Number(form.price), Number(form.discountInp))
  }, [valid, form.discountInp, form.price])


  return { result }
}