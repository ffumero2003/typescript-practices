import { PropsResults } from "../types";
import StatRow from "./statRow";

export default function ResultsCard({ finalPrice, savings, money }: PropsResults ){
  const fmt = money ?? ((n: number) => Math.round(n).toLocaleString("es-CR"));
  return(
    <section className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-emerald-200 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-emerald-300">Resultados</h2>
      <div className="grid gap-2">
        <StatRow label="Ahorro" value={`₡ ${fmt(savings)}`} />
        <StatRow label="Precio final" value={`₡ ${fmt(finalPrice)}`} />
      </div>
    </section>
  )
}