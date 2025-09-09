import type { PropsNumField } from "../types";

export default function NumberField({ label, value, onValue, placeholder }: PropsNumField) {
  return(
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onValue(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </label>
  );
}