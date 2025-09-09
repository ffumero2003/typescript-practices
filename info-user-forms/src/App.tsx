import FieldInputs from "./components/fieldInputs"
import ResultCard from "./components/resultCard"
import { useState } from "react"
import type { Inputs, Results } from "./types"

function App() {
 
  const initialForm: Inputs = {
  nombre: "",
  password: "",
  email: "",
  alias: "",
  edad: "",
};

const [form, setForm] = useState<Inputs>(initialForm);

  const [results, setResults] = useState<Results[]>([]);

  function set<K extends keyof Inputs>(key: K, val: Inputs[K]){
    setForm(prev => ({...prev, [key]: val}))
  }

  const edadNum = Number(form.edad)
  const valid = form.nombre !== "" && form.password !== "" &&
  form.email !== "" && form.alias !== "" &&
  form.edad !== "" && edadNum > 0;

  function HandleResults(){
    if(!valid) return; 
    setResults((prev) => [...prev, { ...form }])

    setForm(initialForm);

  }


  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen w-screen">
      <h1 className="font-bold text-2xl ">Formulario</h1>
      <div className="flex gap-3 justify-center items-center">
          <FieldInputs 
          type="text"
          label="Nombre" 
          value={form.nombre}
          onValue={(e) =>  set("nombre", e)}
          placeholder="Nombre..." />

          <FieldInputs 
          type="password"
          label="Password" 
          value={form.password}
          onValue={(e) =>  set("password", e)}
          placeholder="......." />

          <FieldInputs 
          type="email"
          label="Email" 
          value={form.email}
          onValue={(e) =>  set("email", e)}
          placeholder="email..." />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <FieldInputs
          type="text"
          label="Alias" 
          value={form.alias}
          onValue={(e) =>  set("alias", e)}
          placeholder="Alias..." />

          <FieldInputs
          type="number"
          label="Edad" 
          value={form.edad}
          onValue={(e) =>  set("edad", e)}
          placeholder="Edad..." />
      </div>
      <button className="py-2 px-4 border-2 border-transparent rounded-lg  hover:border-blue-500 transition-colors duration-500" onClick={HandleResults} disabled={!valid}>Ingresar</button>
      {results && <ResultCard results={results} /> }

    </div>
  )
}

export default App
