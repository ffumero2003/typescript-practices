import type { PropsNumField } from "../types";

export default function NumberField({ label, value, onValue, placeholder}: PropsNumField){
  return (
    <label className="grid gap-1">
      <span className="text-sm font-medium text-zinc-300">{label}</span>
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValue(e.target.value === "" ? "" : Number(e.target.value))}
        className="w-full rounded-xl border border-zinc-300/20 bg-white/5 px-3 py-2 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
      />
    </label>
  )
}
