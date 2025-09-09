import StatRow from "./statRow";
import type { PropsResult } from "../types"


export default function ResultsCard({ bmr, tdee, bmi, bmiText }: PropsResult) {
  const round = (n: number) => Math.round(n).toLocaleString();

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Resultados
      </h2>
      <div className="grid gap-2">
        <StatRow label="BMR (kcal/día)" value={round(bmr)} />
        <StatRow label="TDEE (kcal/día)" value={round(tdee)} />
        <StatRow label="BMI" value={`${bmi.toFixed(1)} — ${bmiText}`} />
      </div>
    </section>
  );
}
