import type { Currency, PropsCurrency } from "../types";

export default function CurrencySelect({ currency, onChange }: PropsCurrency){
  return (
    <label className="flex flex-col gap-1 sm:flex-row sm:items-center w-full">
      <span className="min-w-28 text-sm font-medium text-gray-700 dark:text-gray-300">Currency</span>
      <select
        className="mt-1 sm:mt-0 w-full sm:w-52 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-indigo-500"
        value={currency}
        onChange={(e) => onChange(e.target.value as Currency)}
      >
        <option value="CRC">CRC</option>
        <option value="USD">USD</option>
      </select>
    </label>
  );
}
