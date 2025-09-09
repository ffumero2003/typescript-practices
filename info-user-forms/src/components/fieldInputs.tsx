import type { PropsFieldInps } from "../types";

export default function FieldInputs({ label, value, onValue, placeholder, type }: PropsFieldInps){
  return(
    <label className="flex flex-col gap-2 border border-black rounded-lg px-2 py-1 w-2/5">
      <span className="underline underline-offset-2 decoration-blue-500">{label}</span>
      <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onValue(e.target.value)}
      className="outline-none p-1 border border-white rounded-lg focus:border-blue-500 transition-all duration-500"
      />
    </label>
  )
}