import { useState } from "react";
import "./index.css";
import { calculate } from "./utils/calc";
import { formatMoney } from "./utils/money";
import NumberField from "./components/NumberField";
import CurrencySelect from "./components/CurrencySelect";
import ResultsPanel from "./components/ResultsPanel";
import type { Result, Currency } from "./types";

export default function App() {
  const [price, setPrice] = useState<number | "">("");
  const [tip, setTip] = useState<number | "">("");
  const [people, setPeople] = useState<number | "">("");
  const [result, setResult] = useState<Result | null>(null);
  const [currency, setCurrency] = useState<Currency>("CRC");

  const isValid = price !== "" && tip !== "" && people !== "" && Number(people) > 0;
  const tipPct = tip === "" ? 0 : Number(tip);
  const money = (n: number) => formatMoney(n, currency);

  const handleClick = () => {
    if (!isValid) { setResult(null); return; }
    setResult(calculate(Number(price), Number(tip), Number(people)));
  };

  const clearAll = () => {
    setPrice("");
    setTip("");
    setPeople("");
    setResult(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <main className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Tip Calculator</h1>
        </header>

        <section className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/60 backdrop-blur p-6 shadow-md">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <NumberField label="Price"  value={price}  onChange={setPrice}  placeholder="e.g. 25000" min={0}   step={currency === "CRC" ? 1 : 0.01} />
            <NumberField label="Tip %"  value={tip}    onChange={setTip}    placeholder="e.g. 10"   min={0}   step={0.1} />
            <NumberField label="People" value={people} onChange={setPeople} placeholder="e.g. 2"    min={1}   step={1} />
            <CurrencySelect currency={currency} onChange={setCurrency} />

            <div className="sm:col-span-2 flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={clearAll}
                className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleClick}
                disabled={!isValid}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50 transition"
              >
                Calculate
              </button>
            </div>
          </form>
        </section>

        {result && (
          <div className="mt-6">
            <ResultsPanel result={result} tipPct={tipPct} money={money} />
          </div>
        )}
      </main>
    </div>
  );
}
