import type { PropsNumField } from "../types"

export default function NumberField({
  label,
  value,
  onValue,
  placeholder,
  min = 0,
  step,
  id,
  suffix
}: PropsNumField) {
  const fieldId = id ?? `nf-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label htmlFor={fieldId} className="grid gap-1">
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {label}
      </span>
      <div className="relative">
        <input
          id={fieldId}
          type="number"
          min={min}
          step={step}
          value={value}
          placeholder={placeholder}
          inputMode="numeric"
          onChange={(e) =>
            onValue(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 pr-10 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}
