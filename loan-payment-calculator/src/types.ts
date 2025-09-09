export type Inputs = {
  prestamo: number | "";
  tasaAnual: number | "";
  plazoDeMeses: number | "";
  frecuenciaPago: "mensual" | "quincenal" | "semanal";
  moneda: "CRC" | "USD";
}

export type Results = {
  cuotaPeriodica: number;
  numeroTotPagos: number;
  totalPagado: number;
  interesesTot: number;
}

export type PropsNumField = {
  label: string;
  value: number | "";
  onValue: (v:number | "") => void;
  placeholder: string;
}

export type PropsCurrencySelect = {
  value: "CRC" | "USD";
  onValue: (m: "CRC" | "USD") => void;
}

export type PropsFrequencySelect = {
  value: "mensual" | "quincenal" | "semanal";
  onValue: (f: "mensual" | "quincenal" | "semanal") => void;
}

export type PropsResults = {
  results: Results;
  moneda: "CRC" | "USD";
}
