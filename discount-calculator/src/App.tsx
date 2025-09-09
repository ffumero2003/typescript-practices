import { useState } from 'react'
import NumberField from './components/numberField'
import ResultsCard from './components/resultCard'
import type { Inputs } from './types'
import { UseDiscount } from './hooks/discount'

function App() {
  const [form, setForm] = useState<Inputs>({
    price: "",
    discountInp: ""
  });

  const valid =
    form.price !== "" &&
    form.discountInp !== "" &&
    form.price >= 0 &&
    form.discountInp >= 0 &&
    form.discountInp <= 100;
  
  const { result } = UseDiscount(form, valid)

  function set<K extends keyof Inputs>(key: K, val: Inputs[K]){
    setForm((prev) => ({ ...prev, [key]: val}))
  }

  return (
    <main className="mx-auto my-10 max-w-[520px] px-4 bg-black/80 p-5 rounded-lg">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-zinc-100">Discount Calculator</h1>
        <p className="text-sm text-zinc-400">Calcule el precio final con descuento.</p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-zinc-200/20 bg-white/5 p-5 shadow-sm backdrop-blur">
        <NumberField
          label="Precio"
          value={form.price}
          onValue={(v) => set("price", v)}
          placeholder="10000"
          
        />
        <NumberField
          label="Descuento (%)"
          value={form.discountInp}
          onValue={(v) => set("discountInp", v)}
          placeholder="15"
          
        />
      </section>

      {!valid ? (
        <p className="mt-4 text-sm text-red-500">Ingrese precio ≥ 0 y descuento entre 0 y 100.</p>
      ) : (
        <ResultsCard finalPrice={result!.finalPrice} savings={result!.savings} />
      )}
    </main>
  )
}

export default App
