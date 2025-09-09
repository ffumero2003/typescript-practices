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

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <div className="border border-black flex flex-col justify-center items-center p-3">
        <h1 className="text-xl font-semibold">Tip Calculator</h1>

        <form onSubmit={(e) => e.preventDefault()} className="border border-black flex flex-col items-start p-3">
          <NumberField label="Price"  value={price}  onChange={setPrice}  placeholder="e.g. 25000" min={0}   step={currency === "CRC" ? 1 : 0.01} />
          <NumberField label="Tip %"  value={tip}    onChange={setTip}    placeholder="e.g. 10"   min={0}   step={0.1} />
          <NumberField label="People" value={people} onChange={setPeople} placeholder="e.g. 2"    min={1}   step={1} />
          <CurrencySelect currency={currency} onChange={setCurrency} />

          <button
            type="button"
            onClick={handleClick}
            disabled={!isValid}
            className="self-end mt-2 px-3 py-1 border border-black rounded-xl disabled:opacity-50 hover:border-blue-400 transition-colors duration-500"
          >
            Calculate
          </button>
        </form>
      </div>

      {result && <ResultsPanel result={result} tipPct={tipPct} money={money} />}
    </div>
  );
}
