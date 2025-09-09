import type { Result } from "../types";

type Props = {
  result: Result;
  tipPct: number;
  money: (n: number) => string;
};

export default function ResultsPanel({ result, tipPct, money }: Props) {
  const items = [
    { label: `Total tip ${tipPct}%`, value: money(result.tipTotal) },
    { label: "Total", value: money(result.totalBill) },
    { label: `Tip per person ${tipPct}%`, value: money(result.tipPerPerson) },
    { label: "Total per person", value: money(result.totalPerPerson) },
  ];

  return (
    <section className="w-full max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur p-4 shadow-sm"
          >
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
