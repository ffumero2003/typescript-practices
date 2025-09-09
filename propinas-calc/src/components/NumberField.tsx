import { PropsNumber } from "../types"

export default function NumberField({
  label, value, onChange, placeholder = "", min, step
}: PropsNumber) {
  return(
    <label className="py-2 flex items-center">
      <span className="w-32">{label}</span>
      <input
      type="number"
      className="ml-2 p-2 border border-black"
      placeholder={placeholder}
      value={value}
      min={min}
      step={step}
      onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      />
    </label>
  )
}