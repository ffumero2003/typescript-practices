import type { PropsSelect } from "../types";

export default function SelectField<T extends string>({
  label,
  value,
  onValue,
  options,
  id
}: PropsSelect<T>) {
  const fieldId = id ?? `sf-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label htmlFor={fieldId} className="grid gap-1">
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {label}
      </span>
      <select
        id={fieldId}
        value={value}
        onChange={(e) => onValue(e.target.value as T)}
        className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
      >
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </label>
  );
}
