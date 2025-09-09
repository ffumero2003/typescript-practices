import type { Results } from "../types";

export function Calculations(
  prestamo: number,
  tasaAnual: number,
  plazoDeMeses: number,
  frecuenciaPago: "mensual" | "quincenal" | "semanal",
): Results {
  let m: number;
  if (frecuenciaPago === "mensual") {
    m = 12;
  } else if (frecuenciaPago === "quincenal") {
    m = 24;
  } else {
    m = 52;
  }

  const iAnual = tasaAnual / 100;
  const r = iAnual / m;
  const anios = plazoDeMeses / 12;
  const n = anios * m;

  let cuota: number;
  if (r > 0) {
    cuota =
      prestamo *
      (r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);
  } else {
    cuota = prestamo / n;
  }

  const numeroTotPagos = n;
  const totalPagado = cuota * n;
  const interesesTot = totalPagado - prestamo;

  return {
    cuotaPeriodica: cuota,
    numeroTotPagos,
    totalPagado,
    interesesTot,
  };
}
