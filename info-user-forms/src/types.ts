export type Inputs = {
  nombre: string;
  password: string;
  email: string;
  alias: string | "";
  edad: string
}

export type Results = Inputs

export type PropsFieldInps = {
  label: string;
  value: string;
  onValue: (v:string | "") => void;
  placeholder: string;
  type: string;
}

export type PropsResults = {
  results: Results[];
}