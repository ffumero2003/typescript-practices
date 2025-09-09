import type { Result } from "../types";

export function calculate(price: number, tip: number, people: number): Result {
  const tipTotal = price * (tip / 100);
  const totalBill = price + tipTotal;
  const tipPerPerson = tipTotal / people;
  const totalPerPerson = totalBill / people;
  return { tipTotal, totalBill, tipPerPerson, totalPerPerson };
}
