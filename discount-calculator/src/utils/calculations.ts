import type { Results } from "../types";

export function Calculations(price: number, dicsountInp: number): Results {
  const d = dicsountInp / 100;
  const savings = price * d;
  const finalPrice = price - savings;
  return { savings, finalPrice };
}

