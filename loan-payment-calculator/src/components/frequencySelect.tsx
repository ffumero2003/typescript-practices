import type { PropsFrequencySelect } from "../types";

export default function FrequencySelect({ value, onValue }: PropsFrequencySelect) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">Seleccione la frecuencia</span>
      <select
        value={value}
        onChange={(e) =>
          onValue(e.target.value as "mensual" | "quincenal" | "semanal")
        }
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="mensual">Mensual</option>
        <option value="quincenal">Quincenal</option>
        <option value="semanal">Semanal</option>
      </select>
    </label>
  );
}
