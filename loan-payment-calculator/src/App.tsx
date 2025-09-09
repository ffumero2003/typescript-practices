// src/App.tsx
import { useState } from "react";
import type { Inputs, Results } from "../src/types";
import { Calculations } from "./utils/calculations";
import NumberField from "./components/fieldInputs";
import CurrencySelect from "./components/currencySelect";
import FrequencySelect from "./components/frequencySelect";
import ResultsCard from "./components/resultsCard";

export default function App() {
  const [form, setForm] = useState<Inputs>({
    prestamo: "",
    tasaAnual: "",
    plazoDeMeses: "",
    frecuenciaPago: "mensual",
    moneda: "CRC",
  });

  const [results, setResults] = useState<Results | null>(null);

  const valid =
    form.prestamo !== "" &&
    form.tasaAnual !== "" &&
    form.plazoDeMeses !== "" &&
    Number(form.prestamo) > 0 &&
    Number(form.tasaAnual) >= 0 &&
    Number(form.tasaAnual) <= 100 &&
    Number(form.plazoDeMeses) >= 1;

  function handleCalc() {
    if (!valid) return null;

    const r = Calculations(
      Number(form.prestamo),
      Number(form.tasaAnual),
      Number(form.plazoDeMeses),
      form.frecuenciaPago
    );

    setResults(r);
  }

  function handleReset() {
    setForm({
      prestamo: "",
      tasaAnual: "",
      plazoDeMeses: "",
      frecuenciaPago: "mensual",
      moneda: "CRC",
    });
    setResults(null);
  }

  return (
    <main className="mx-auto my-10 max-w-xl px-4">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Loan Payment Calculator</h1>
      </header>

      <section className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <NumberField
          label="Préstamo"
          value={form.prestamo}
          onValue={(v) => setForm((prev) => ({ ...prev, prestamo: v }))}
          placeholder="1000000"
        />

        <NumberField
          label="Tasa anual (%)"
          value={form.tasaAnual}
          onValue={(v) => setForm((prev) => ({ ...prev, tasaAnual: v }))}
          placeholder="12.5"
        />

        <NumberField
          label="Plazo (meses)"
          value={form.plazoDeMeses}
          onValue={(v) => setForm((prev) => ({ ...prev, plazoDeMeses: v }))}
          placeholder="36"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CurrencySelect
            value={form.moneda}
            onValue={(m) => setForm((prev) => ({ ...prev, moneda: m }))}
          />
          <FrequencySelect
            value={form.frecuenciaPago}
            onValue={(f) => setForm((prev) => ({ ...prev, frecuenciaPago: f }))}
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={handleReset}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            type="button"
          >
            Reset
          </button>
          <button
            onClick={handleCalc}
            disabled={!valid}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
          >
            Calcular
          </button>
        </div>
      </section>

      {results && (
        <section className="mt-6">
          <ResultsCard results={results} moneda={form.moneda} />
        </section>
      )}
    </main>
  );
}
