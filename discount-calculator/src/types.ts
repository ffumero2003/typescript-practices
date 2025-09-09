export type Inputs = {
  price: number | "";
  discountInp: number | "";
}

export type Results = {
  savings: number;
  finalPrice: number;
}

export type PropsNumField = {
  label: string;
  value: number | "";
  onValue: (v:number | "") => void;
  placeholder: string;
}

export type PropsResults = {
  finalPrice: number;
  savings: number;
  money?: (n: number) => string
}