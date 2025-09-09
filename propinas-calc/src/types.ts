export type Result = {
  tipTotal: number; 
  totalBill: number;
  tipPerPerson: number;
  totalPerPerson: number;
  
}

export type Currency = "CRC" | "USD";

export type PropsNumber = {
  label: string;
  value: number | "";
  onChange: (v: number | "") => void;
  placeholder?: string;
  min?: number;
  step?: number | "any" 
};

export type PropsCurrency = {
  currency: Currency; 
  onChange: (c: Currency) => void
}

export type PropsResults = {
  result: Result;
  tipPct: number;
  money: (n: number) => string
}