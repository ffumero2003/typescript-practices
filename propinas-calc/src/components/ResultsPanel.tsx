import type { Result } from "../types"

export default function ResultsPanel({ result, tipPct, money}){
  return(
    <div className="flex flex-col gap-2 justify-center items-center">
      <p className="border border-black p-2">
        <strong>Total tip {tipPct}%: </strong> {money(result.tipTotal)}
      </p>
      <p className="border border-black p-2">
        <strong>Total: </strong> {money(result.totalBill)}
      </p>
      <p className="border border-black p-2">
        <strong>Tip per person {tipPct}%: </strong> {money(result.tipPerPerson)}
      </p>
      <p className="border border-black p-2">
        <strong>Total per person: </strong> {money(result.totalPerPerson)}
      </p>
    </div>
  )
}