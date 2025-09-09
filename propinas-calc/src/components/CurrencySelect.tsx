import type { Currency, PropsCurrency } from "../types";

export default function CurrencySelect({ currency, onChange }: PropsCurrency){
  return(
    <label className="py-2 flex items-center">
      <span className="w-32">Currency</span>
      <select 
        className="ml-2 p-2 border border-black"
        value={currency}
        onChange={(e) => onChange(e.target.value as Currency)}
      >
        <option value="CRC">CRC</option>
        <option value="USD">USD</option>

      </select>
    </label>
  )
}