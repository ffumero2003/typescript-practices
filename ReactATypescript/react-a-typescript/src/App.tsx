import { useEffect, useState } from "react"
import type { ApiRes, Character } from "./types/api"

function App() {
const [usuario, setUsuario] = useState<Character[]>([])
const [cargando, setCargando] = useState<boolean>(true)

useEffect(() => {
  const info = async() => {
    try{
      const res = await fetch("https://rickandmortyapi.com/api/character")
      if(!res.ok){
        throw new Error("Error")
      }
      const data = (await res.json()) as ApiRes<Character>;
      setUsuario(data.results)
    } catch(error){
      console.error(error)
    } finally{
      setCargando(false)
    }
  }

  info()
}, [])

if(cargando) return <p>Cargando</p>


  return (
    <>
    {usuario.map(char => (
      <p key={char.id}>{char.name}</p>
    ))}
      
    </>
  )
}

export default App
